export default class summaryPage {
    static get url(){
        return '/appointment.php#summary';
    }

    static visit(){
        cy.visit(this.url);
    }

    static get facility(){
        return cy.get('p#facility');
    }

    static get readmission(){
        return cy.get('p#hospital_readmission');
    }

    static get program(){
        return cy.get('p#program');
    }

    static get date(){
        return cy.get('p#visit_date');
    }
    static get comment(){
        return cy.get('p#comment');
    }

}