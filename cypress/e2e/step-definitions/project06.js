const {
  Given,
  Then,
  When,
} = require("@badeball/cypress-cucumber-preprocessor");

import frontendPage from "../pages/frontendPage";

const frontPage = new frontendPage();

Given(/^the user is on "([^"]*)"$/, () => {
  cy.visit(`${Cypress.env("baseURL")}frontend/project-4`);
});

When(/^the user clicks on the “ADD PRODUCT” button$/, () => {
  frontPage.clickOnProductButton();
});

Then(/^the user should see the “Inventory” heading$/, () => {
  frontPage.getInventory().should("be.visible");
});

Then(/^the user should see the table with the headers below$/, (dataTable) => {
  const arr = dataTable.rawTable.flat();

  frontPage.getTableHeaders().each(($el, index) => {
    cy.wrap($el).should("contain", arr[index]);
  });

  arr.forEach((input) => {
    cy.log(input);
  });
});

Then(/^the user should see the table with the rows below$/, (dataTable) => {
  const expRows = dataTable.raw();
  frontPage.getTableRows().each((row, index) => {
    cy.wrap(row)
      .find("td")
      .each((cell, cellIndex) => {
        cy.wrap(cell)
          .invoke("text")
          .then((text) => {
            expect(text.trim()).to.equal(expRows[index][cellIndex]);
          });
      });
  });
});

Then(/^the user should see the “ADD PRODUCT” button is enabled$/, () => {
  frontPage.getProductButton().should("be.enabled");
});

Then(/^the user should see the “Total = \$2,300” text displayed$/, () => {
  frontPage.getTotalText().should("have.text", "Total = $2,300");
});

///////---------Test Case 02-----------/////////////

Then(
  /^the user should see the “Add New Product” modal with its heading$/,
  () => {
    frontPage.getModalHeading().should("have.text", "Add New Product");
  }
);

Then(/^the user should see the “X” button is enabled$/, () => {
  frontPage.getX().should("be.visible").and("be.enabled");
});

Then(/^the user should see the “Please select the quantity” label$/, () => {
  frontPage.getQuantityLabel().should("be.visible");
});

Then(/^the user should see the “Quantity” input box is enabled$/, () => {
  frontPage.getQuantityInput().should("be.visible").and("be.enabled");
});

Then(
  /^the user should see the “Please enter the name of the product” label$/,
  () => {
    frontPage.getProductLabel().should("be.visible");
  }
);

Then(/^the user should see the “Product” input box is enabled$/, () => {
  frontPage.getProductInput().should("be.enabled");
});

Then(
  /^the user should see the “Please enter the price of the product” label$/,
  () => {
    frontPage.getPriceLabel().should("be.visible");
  }
);

Then(/^the user should see the “Price” input box is enabled$/, () => {
  frontPage.getPriceInput().should("be.visible").and("be.enabled");
});

Then(/^the user should see the “SUBMIT” button is enabled$/, () => {
  frontPage.getSubmitButton().should("be.visible").and("be.enabled");
});

//////////--------Test Case 03--------////////////

When(/^the user clicks on the “X” button$/, () => {
  frontPage.getClickOnXButton();
});

Then(/^the user should not see the “Add New Product” modal$/, () => {
  frontPage.getModalHeading().should("not.exist");
});

///////------ Test Case 04----------////////////

Then(/^the user enters the quantity as “2”$/, (input) => {
  frontPage.getQuantityInput().type(2);
});

Then(/^the user enters the product as “Mouse”$/, (input) => {
  frontPage.getProductInput().type("Mouse");
});

Then(/^the user enters the price as “100”$/, (input) => {
  frontPage.getPriceInput().type(100);
});

Then(/^the user clicks on the “SUBMIT” button$/, () => {
  frontPage.getClickOnSubmitButton();
});

Then(/^the user should see the table with the new row below$/, (dataTable) => {
  const expRows = dataTable.raw();
  frontPage
    .getTableRows()
    .eq(3)
    .within(() => {
      cy.get("td").each((cell, cellIndex) => {
        cy.wrap(cell)
          .invoke("text")
          .then((text) => {
            expect(text.trim()).to.equal(expRows[0][cellIndex]);
          });
      });
    });
});

Then(/^the user should see the “Total = \$2,500” text displayed$/, () => {
  frontPage.getTotalText().should("have.text", "Total = $2,500");
});
