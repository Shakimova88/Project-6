class frontendPage {
  getInventory() {
    return cy.get(".is-size-3");
  }

  getTableHeaders() {
    return cy.get("div > table > thead > tr > th");
  }

  getTableRows() {
    return cy.get("#product_table > tbody > tr");
  }
  getProductButton() {
    return cy.get("#add_product_btn");
  }
  getTotalText() {
    return cy.get("#total_amount");
  }

  clickOnProductButton() {
    this.getProductButton().should("be.visible").click();
  }

  getModalHeading() {
    return cy.get("#modal_title");
  }

  getX() {
    return cy.get(".delete");
  }

  getQuantityLabel() {
    return cy.get('label[for="product_quantity"]');
  }

  getQuantityInput() {
    return cy.get("#quantity");
  }
  getProductLabel() {
    return cy.get('label[for="product_name"]');
  }

  getProductInput() {
    return cy.get("#product");
  }

  getPriceLabel() {
    return cy.get('label[for="product_price"]');
  }

  getPriceInput() {
    return cy.get("#price");
  }

  getSubmitButton() {
    return cy.get("#submit");
  }
  getTotalText() {
    return cy.get("#total_amount");
  }

  getClickOnXButton() {
    this.getX().should("be.visible").click();
  }

  getClickOnSubmitButton() {
    this.getSubmitButton().click();
  }
}

export default frontendPage;
