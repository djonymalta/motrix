const PRODUTO = {
  tamnhoxs: "#option-label-size-143-item-166",
  corlaranja: "#option-label-color-93-item-56",
  botaoaddtocart:
    "#maincontent > div.columns > div > div.widget.block.block-static-block > div.block.widget.block-products-list.grid > div > div > ol > li:nth-child(1) > div > div > div.product-item-inner > div > div.actions-primary > form > button",
};

const CARRINHO = {
  botaocarrinho: ".showcart",
  fazercheckout: 'button[id="top-cart-btn-checkout"]',
};

const FORMULARIO = {
  email: "#customer-email",
  primeiroNome: 'input[name="firstname"',
  ultimoNome: 'input[name="lastname"',
  companhia: 'input[name="company"',
  enderecoCampo1: 'input[name="street[0]"',
  enderecoCampo2: 'input[name="street[1]"',
  enderecoCampo3: 'input[name="street[2]"',
  cidade: 'input[name="city"',
  estado: '.control  .select[name="region_id"',
  cep: 'input[name="postcode"',
  telefone: 'input[name="telephone"]',
  frete: ":nth-child(1) > :nth-child(1) > .radio",
};
export { PRODUTO, CARRINHO, FORMULARIO };