import { ServicoDePagamento } from "../src/transferenciaPagamento.js";
import assert from "node:assert";

describe("Validar ações do serviço de transferência bancária", () => {
  it("Validar que a categoria do pagamento é cara quando o valor é maior que 100.00", function () {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();

    // Act
    servicoDePagamento.pagar("0002-3456-7890", "Luz", 100.01);
    const pagamento = servicoDePagamento.consultarUltimoPagamento();

    // Assert
    assert.equal(pagamento.empresa, "Luz");
    assert.equal(pagamento.valor, 100.01);
    assert.equal(pagamento.categoria, "cara");
  });

  it("Validar que a categoria do pagamento é padrão quando o valor é menor ou igual a 100.00", function () {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();

    // Act
    servicoDePagamento.pagar("0001-2345-6789", "Agua", 100.0);
    const pagamento = servicoDePagamento.consultarUltimoPagamento();

    // Assert
    assert.deepEqual(pagamento, {
      codigoBarras: "0001-2345-6789",
      empresa: "Agua",
      valor: 100.0,
      categoria: "padrão",
    });
  });
});

it("Validar que a consulta traz todos os pagamentos realizados", function () {
  //Arrange
  const servicoDePagamento = new ServicoDePagamento();
  //Act
  servicoDePagamento.pagar("0001-2345-6789", "Agua", 90.99);
  servicoDePagamento.pagar("0002-3456-7890", "Luz", 100.09);
  servicoDePagamento.pagar("0003-4567-8910", "Convenio", 600.5);
  const pagamentos = servicoDePagamento.consultarPagamentos();
  //Assert
  assert.deepEqual(pagamentos, [
    {
      codigoBarras: "0001-2345-6789",
      empresa: "Agua",
      valor: 90.99,
      categoria: "padrão",
    },
    {
      codigoBarras: "0002-3456-7890",
      empresa: "Luz",
      valor: 100.09,
      categoria: "cara",
    },
    {
      codigoBarras: "0003-4567-8910",
      empresa: "Convenio",
      valor: 600.5,
      categoria: "cara",
    },
  ]);
  });

it("Validar que a consulta traz apenas o último pagamento", function () {
  // Arrange
  const servicoDePagamento = new ServicoDePagamento();

  // Act
  servicoDePagamento.pagar("0001-2345-6789", "Agua", 100.01);
  servicoDePagamento.pagar("0002-3456-7890", "Luz", 100.09);
  servicoDePagamento.pagar("0003-4567-8910", "Convenio", 600.5);
  const pagamento = servicoDePagamento.consultarUltimoPagamento();

  // Assert
  assert.deepEqual(pagamento, {
    codigoBarras: "0003-4567-8910",
    empresa: "Convenio",
    valor: 600.5,
    categoria: "cara",
  });
});



  it("Validar que a consulta traz um array vazio quando não há pagamentos realizados", function () {
    //Arrange
    const servicoDePagamento = new ServicoDePagamento();
    //Act
    const pagamentos = servicoDePagamento.consultarPagamentos();
    //Assert
    assert.deepEqual(pagamentos, []);
  });

