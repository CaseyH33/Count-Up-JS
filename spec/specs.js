
describe('countUp', function() {

    it("checks if number will increase by 2", function(){
        expect(countUp(2,2)).to.eql([2]);
    });

    it("checks if number will increase by 5", function(){
        expect(countUp(20, 5)).to.eql([5, 10, 15, 20]);
    });

    it("checks if number will increase by 6", function(){
        expect(countUp(20, 6)).to.eql([6, 12, 18]);
    });

    it("checks if number will increase by 7", function(){
        expect(countUp(50, 7)).to.eql([7, 14, 21, 28, 35, 42, 49]);
    });
});
