const locators = {
  Login: {
    user: "[data-test='email']",
    pass: "[data-test='passwd']",
    btnLogin: ".btn"
  },
  
  Menu:{
    home: '[data-test="menu-home"]',
    settings: "[data-toggle='dropdown']",
    contas: '[href="/contas"]',
    reset: '[href="/reset"]',
    movimentacao: '[data-test="menu-movimentacao"]',

  },

  PgContas:{
    inputNomeContas: '[data-test="nome"]',
    btnSalvar: ".btn",
    fnXpBtnEditar: nomeConta => `//table//td[contains(., '${nomeConta}')]/..//i[@class='far fa-edit']`,
  },

  PgMovimentacao:{
    inputDescricao: 'input#descricao',
    inputValor: '[data-test="valor"]',
    inputInteressado: '[data-test="envolvido"]',
    NomeConta: '[data-test="conta"]',
    btnStatus: '[data-test="status"]',
    btnSalvar: ".btn",
  },

  PgExtrato:{
    fnXpLiTransacao: (descricao, valor) => `//span[contains(.,'${descricao}')]/following-sibling::small[contains(.,'${valor}')]`
  },

  PgHome:{
    fnXpSaldoConta: nomeConta => `//td[contains(.,'${nomeConta}')]/../td[2]`
  }

  , message: "div#toast-container"
};

export default locators;
