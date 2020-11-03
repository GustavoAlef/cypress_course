const locators = {
  Login: {
    user: "[data-test='email']",
    pass: "[data-test='passwd']",
    btnLogin: ".btn"
  },
  
  Menu:{
    settings: "[data-toggle='dropdown']",
    contas: '[href="/contas"]',
    reset: '[href="/reset"]',

  },

  PgContas:{
    inputNomeContas: '[data-test="nome"]',
    btnSalvar: ".btn",
    xpBtnEditar: "//table//td[contains(., 'conta1')]/ ..//i[@class='far fa-edit']",


  }

  , message: "div#toast-container"
};

export default locators;
