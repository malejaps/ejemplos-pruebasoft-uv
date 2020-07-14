import buscador from '../page-object/buscador';

const dataSet = require('../data-driven/elementos.json');

fixture`Ejemplo E2E`
    .page`https://www.mercadolibre.com.co/`;

dataSet.forEach(data => {
    test('Buscar audifonos en mercado libre', async t => {
    await t
        .typeText(buscador.searchInput, data.searchElement)
        .click(buscador.searchButton)
        .expect(buscador.resultsSection.exists).ok('',{timeout: 5000});
    });
});
