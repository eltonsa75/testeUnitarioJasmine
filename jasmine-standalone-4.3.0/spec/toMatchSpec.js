describe("teste do toMach", function(){
    it("deve validar o uso do toMatch", function() {
        var texto = "teste com jasmine";

        expect(texto).toMatch("jasmine");
        expect(texto).toMatch(/jasmine/i);
        expect("12345-456").toMatch(/^\d{5}-\d{3}$/);

    });
});