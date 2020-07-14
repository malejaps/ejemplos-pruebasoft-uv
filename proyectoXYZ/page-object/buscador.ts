import { Selector } from 'testcafe';

class Buscador {

    public searchInput;
    public titleText;

    constructor(){
        this.searchInput = Selector('.nav-search-input');
        this.titleText = Selector('.ui-search-breadcrumb__title');
    }
}

export default new Buscador()

