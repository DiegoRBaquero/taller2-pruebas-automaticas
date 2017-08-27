module.exports = { // Prueba de bsqueda y direccionamiento al profesor
  'Professor search and direction': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .setValue('#react-select-required_error_checksum--value > div.Select-input > input', 'Mario Lin')
      .click('.Select-menu-outer > ul > li')
      .assert.urlEquals('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
      .end();
  }
};