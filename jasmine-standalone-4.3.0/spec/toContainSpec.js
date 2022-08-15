describe("Teste do toContain", function(){
    it("Deve demostrar o uso do toContain", function(){
        var texto = "Meu nome é Elton";
        var frutas = ["laranja", "banana", "pera"];

        expect(texto).toContain("Elton");
        expect(texto).not.toContain("elton");
        expect(frutas).toContain("laranja");
        expect(frutas).not.toContain("uva");
    });
});