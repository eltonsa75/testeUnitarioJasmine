describe("Teste do Objeto jasmine.stringMatching", function() {

    var exibirTexto;

    beforeAll(function() {
      exibirTexto = jasmine.createSpy("exibirTexto");
    });

    it("deve demostrar o uso do jasmine.stringMatching", function() {
        exibirTexto("Curso de Jasmine");

        expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching("Jasmine"));
        expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching(/jasmine/i));

        expect("Curso de JavaScript").toEqual(jasmine.stringMatching("JavaScript"));
    });

});