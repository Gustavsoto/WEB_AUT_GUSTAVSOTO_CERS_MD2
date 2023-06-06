export default class appointmentPage {
    static get url(){
        return '/#appointment';
    }

    static visit(){
        cy.visit(this.url);
    }

    static get facilityDropdownMenu(){
        return cy.get('select#combo_facility');
    }

    static get checkBox(){
        return cy.get('input#chk_hospotal_readmission');
    }

    static get healthcareProgram(){
        return cy.get('input#radio_program_medicaid');
    }

    static get visitDateInput(){
        return cy.get('input#txt_visit_date');
    }

    static get calendarDay(){
        return cy.get('div.datepicker-days td.day');
    }
    
    static get commentBox(){
        return cy.get('textarea#txt_comment');
    }

    static get bookAppointmentButton(){
        return cy.get('button#btn-book-appointment');
    }
    static get menuIcon(){
        return cy.get('a#menu-toggle');
    }

    static get wraper(){
        return cy.get('nav#sidebar-wrapper');
    }

    static get historyLink(){
        return cy.get('ul.sidebar-nav li').contains("History");
    }
}