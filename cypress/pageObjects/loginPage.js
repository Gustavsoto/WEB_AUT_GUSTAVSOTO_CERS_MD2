export default class loginPage {
    static get url(){
        return '/profile.php#login';
    }

    static visit(){
        cy.visit(this.url);
    }

    static get userNameInput(){
        return cy.get('input#txt-username');
    }
    static get passwordInput(){
        return cy.get('input#txt-password');
    }

    static get loginButton(){
        return cy.get('button#btn-login');
    }
    
}