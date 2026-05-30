# 💳 Serviço de Transferência de Pagamento
Desafio da disciplina do curso de Pós-Graduação em Automação.
Trabalho de Conclusão da Disciplina de Javascript — exercício prático de criação de classe com métodos de pagamento e consulta, com testes automatizados.

## 📋 Sobre o Projeto

Aplicação em Javascript que simula um serviço de pagamento bancário. A classe `ServicoDePagamento` permite realizar pagamentos e consultá-los, categorizando automaticamente como **"cara"** (valor > R$ 100,00) ou **"padrão"** (valor ≤ R$ 100,00).

## 📝 Resumo do Exercício

A classe `ServicoDePagamento` deve conter dois métodos:

- **`pagar(codigoBarras, empresa, valor)`** — realiza um pagamento e o armazena em uma lista. Cada pagamento é salvo como um objeto com as propriedades:
  - `codigoBarras` — identificador do pagamento
  - `empresa` — nome da empresa
  - `valor` — valor do pagamento
  - `categoria` — definida automaticamente:
    - `"cara"` → quando o valor for **maior que R$ 100,00**
    - `"padrão"` → quando o valor for **menor ou igual a R$ 100,00**

- **`consultarUltimoPagamento()`** — retorna apenas o último pagamento realizado da lista.

## 🗂️ Estrutura do Projeto

CALCULAR-PAGAMENTO/
## 🗂️ Estrutura do Projeto

```
CALCULAR-PAGAMENTO/
├── src/
│   └── transferenciaPagamento.js
├── test/
│   └── transferenciaPagamento.test.js
├── package.json
└── README.md
```

## ⚙️ Tecnologias

- Node.js
- Mocha (test runner)
- Node Assert (assertions)

## 🚀 Como Rodar Localmente

**Pré-requisito:** Node.js instalado

```bash
# Clonar o repositório
git clone https://github.com/lanaterrianox/transferencia-de-pagamento.git

# Entrar na pasta
cd transferencia-de-pagamento

# Instalar dependências
npm install

# Rodar os testes
npx mocha
```

## 🧪 Exemplo de Uso

```javascript
const servicoDePagamento = new ServicoDePagamento();

servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);

console.log(servicoDePagamento.consultarUltimoPagamento());
// {
//   codigoBarras: '0987-7656-3475',
//   empresa: 'Samar',
//   valor: 156.87,
//   categoria: 'cara'
// }
```

## ✅ Testes Implementados

- Validar que a categoria é **"cara"** quando valor > R$ 100,00
- Validar que a categoria é **"padrão"** quando valor ≤ R$ 100,00
- Validar que a consulta traz todos os pagamentos realizados
- Validar que a consulta traz apenas o último pagamento
- Validar que retorna array vazio quando não há pagamentos

## 👩‍💻 Autora

[@lanaterrianox](https://github.com/lanaterrianox)
