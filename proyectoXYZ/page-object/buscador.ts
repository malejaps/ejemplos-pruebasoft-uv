import { Selector } from 'testcafe';

class Buscador {

    public searchInput;
    public resultsSection;
    public searchButton;

    constructor(){
        this.searchInput = Selector('.nav-search-input');
        this.searchButton = Selector('.nav-search-btn');
        this.resultsSection = Selector('.ui-search-results').withText('Audifonos');
    }
}

export default new Buscador()

