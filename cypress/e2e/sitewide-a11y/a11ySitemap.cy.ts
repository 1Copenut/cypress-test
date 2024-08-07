/// <reference types="../../support" />

describe("A11y sitemap test", function () {
  it("Asserts all pages are accessible", () => {
    cy.task<string[]>("sitemapURLs").then((pages) => {
      pages.forEach((page) => {
        cy.visit(page);
        cy.task("log", `Evaluating ${page} for a11y`);
        cy.runAxe({ reportOnly: true, writeToFile: true });
      });
    });
  });
});
