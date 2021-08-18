const expect = require('chai').expect;
const test1 = require('./andela_test1');
describe('andela test 1 Problem', () =>{
    it('normal test cases', () => {
        const expected = 479001600;
        const input = 12;
        const actual = test1.factorial(input);
        expect(actual).equal(expected);        
    });

    it('normal test cases', () => {
        const expected = 479001600;
        const input = 30;
        const actual = test1.factorial(input);
        expect(actual).equal(expected);        
    });

    it('normal test cases', () => {
        const expected = 2;
        const input = 479001600;
        const actual = test1.getZeros(input);
        expect(actual).equal(expected);        
    });

    it.only('normal test cases', () => {
        const expected = 2;
        const input = 1000;
        const actual = test1.zeros(input);
        expect(actual).equal(expected);        
    });
   
});