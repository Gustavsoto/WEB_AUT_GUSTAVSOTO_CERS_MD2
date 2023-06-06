export default class homePage {
    static get url(){
        return '/';
    }

    static visit(){
        cy.visit(this.url);
    }

    static get makeAppointmentButton(){
        return cy.get('a#btn-make-appointment');
    }
    
}