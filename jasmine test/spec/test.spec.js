// testing

describe("TestStringutilities", function() {
    it("covers to capital", function() {
        var str = "albert";
        expect(capitalizeName(str)).toEqual("ALBERT");
    })
});