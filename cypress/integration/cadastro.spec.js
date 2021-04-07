/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('Create an Account', () => {
    it('Register a new user', () => {
        cy.visit('index.php');
        
        //click on Sign in button
        cy.get('.header_user_info').click();
        cy.url().should('contain', '?controller=authentication&back=my-account')

        //filling email address
        cy.get('input#email_create').type(chance.email());
        
        //click on Create an account button
        cy.get('button#SubmitCreate').click();
        cy.url().should('contain', '?controller=authentication&back=my-account#account-creation')

        //filling form
        cy.get('input#id_gender2').check();
        cy.get('input#customer_firstname').type(chance.first());
        cy.get('input#customer_lastname').type(chance.last());

        cy.get('input[name="passwd"]').type('Agilizei');
        // cy.get('input#firstname').type(chance.first());
        // cy.get('input#lastname').type(chance.last());
        cy.get('input#address1').type(chance.address());
        cy.get('input#city').type(chance.city());
        cy.get('select#id_country').select('United States');
        cy.get('select#id_state').select('3');
        cy.get('input#postcode').type('09827');
        cy.get('input#phone_mobile').type(chance.phone({ formatted: false }));
        cy.get('input#alias').clear();
        cy.get('input#alias').type('My house');
        cy.get('button#submitAccount').click();

        //checking if the registration was completed successfully
        cy.url().should('contain', '?controller=my-account');
        //checking if the message "Welcome to your account" is visible
        cy.get('p.info-account').should('be.visible');
    });

//elements
//.header_user_info
//input#email_create
//button#SubmitCreate
//label[for='id_gender1']
//input#customer_firstname
//input#customer_lastname
//input#passwd
//input#firstname
//input#lastname
//input#address1
//input#city
//select#id_state
//input#postcode
//select#id_country
//input#phone_mobile
//input#alias
//button#submitAccount

});