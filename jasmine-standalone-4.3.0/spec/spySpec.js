describe("Teste do Objeto jasmine.createSpy", function() {
    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        },

    subtrair: function(n1, n2) {
        return n1 - n2;
    }
    };

    beforeAll(function() {
        spyOn(Calculadora, "somar").and.returnValue(10);         
        spyOn(Calculadora, "subtrair");
    });


});