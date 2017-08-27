var assert = require('assert');
describe('los estudiantes register', function() {
    it('register and login', function () {
        browser.setViewportSize({
          width: 1280,
          height: 720
        });
        browser.url('https://losestudiantes.co');
      browser.waitForVisible('button=Cerrar', 10000);
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 10000);
        browser.click('button=Ingresar');

        var accName = Math.floor(Math.random()*1000000);
        var cajaSignUp = browser.element('.cajaSignUp');
        var nombreInput = cajaSignUp.element('input[name="nombre"]');
        var apellidoInput = cajaSignUp.element('input[name="apellido"]');
        var mailInput = cajaSignUp.element('input[name="correo"]');
        var deptoInput = cajaSignUp.element('select[name="idDepartamento"]');
        var passwordInput = cajaSignUp.element('input[name="password"]');
        var aceptaInput = cajaSignUp.element('input[name="acepta"]');

        nombreInput.click();
        nombreInput.keys('Test');
        apellidoInput.click();
        apellidoInput.keys('Testing');
        mailInput.click();
        mailInput.keys(accName + '@diegorbaquero.com');
        deptoInput.selectByValue('3');
        passwordInput.click();
        passwordInput.keys('mipassword123');
        aceptaInput.click()

        cajaSignUp.element('button=Registrarse').click();
        browser.waitForVisible('.aviso.alert.alert-success', 10000);

        var alertText = browser.element('.aviso.alert.alert-success').getText();
        expect(alertText).toBe('Registro exitoso');

        browser.element('#cuenta').click();
        browser.element('div > ul > li > a').click();
        browser.waitForVisible('button=Ingresar', 10000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys(accName + '@diegorbaquero.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('mipassword123');

        cajaLogIn.element('button=Ingresar').click()

        expect(browser.element('#cuenta')).not.toBeNull()
    });
    it('fails registering already existing', function () {
      browser.setViewportSize({
        width: 1280,
        height: 720
      });
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 10000);
        browser.click('button=Ingresar');

        var cajaSignUp = browser.element('.cajaSignUp');
        var nombreInput = cajaSignUp.element('input[name="nombre"]');
        var apellidoInput = cajaSignUp.element('input[name="appelido"]');
        var mailInput = cajaSignUp.element('input[name="correo"]');
        var deptoInput = cajaSignUp.element('select[name="idDepartamento"]');
        var passwordInput = cajaSignUp.element('input[name="password"]');
        var aceptaInput = cajaSignUp.element('input[name="acepta"]');

        nombreInput.click();
        nombreInput.keys('Test');
        apellidoInput.click();
        apellidoInput.keys('Testing');
        mailInput.click();
        mailInput.keys('pruebasauto@diegorbaquero.com');
        deptoInput.selectByValue('3');
        passwordInput.click();
        passwordInput.keys('mipassword123');
        aceptaInput.click()

        cajaSignUp.element('button=Registrarse').click();
        browser.waitForVisible('.sweet-alert', 10000);

        var alertText = browser.element('.sweet-alert > .text-muted').getText();
        expect(alertText).toContain('Error');
    });
});
