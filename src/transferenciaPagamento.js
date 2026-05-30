export class ServicoDePagamento {
  #pagamentos;

  constructor() {
    this.#pagamentos = [];
  }
  pagar(codigoBarras, empresa, valor) {
    this.#pagamentos.push({
      codigoBarras: codigoBarras,
      empresa: empresa,
      valor: valor,
      categoria: valor > 100.0 ? "cara" : "padrão",
    });
  }

  consultarPagamentos() {
    return this.#pagamentos;
  }

  consultarUltimoPagamento() {
    return this.#pagamentos.slice(-1)[0];
  }
}

const servicoDePagamento = new ServicoDePagamento();
servicoDePagamento.pagar("0987-7656-1111", "Agua", 100.0);
servicoDePagamento.pagar("0987-7656-3475", "Luz", 99.0);
servicoDePagamento.pagar("0987-7656-456", "Aluguel", 61000.0);
servicoDePagamento.pagar("0987-7656-789", "Convenio", 300.99);

//console.log(servicoDePagamento.consultarUltimoPagamento());
 