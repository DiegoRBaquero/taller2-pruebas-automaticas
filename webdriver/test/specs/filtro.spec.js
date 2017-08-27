var assert = require('assert');
describe('los estudiantes profesor', function() {
    it('filtrar', function () {
      browser.setViewportSize({
        width: 1280,
        height: 720
      });
        browser.url('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez');

        var btnFiltro = browser.element('input[name="ISIS1206"]');

        btnFiltro.click();

        expect(browser.getSource()).toContain('Mario es un muy buen profesor y así mismo es exigente a la hora de calificar.');
        expect(browser.getSource()).toContain('El semestre pasado vi web con Mario, se nota que sabe muy bien los temas y domina Javascript bastante.');
    });
});
