export default class historyPage {
    static get url(){
        return '/history.php#history';
    }

    static visit(){
        cy.visit(this.url);
    }

    static get paragraph (){
        return cy.get('div.col-sm-12 p');
    }
}