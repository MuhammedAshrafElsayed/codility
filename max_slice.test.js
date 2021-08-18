const expect = require('chai').expect;
const maxSlice = require('./max_sice');
describe('max Slice Problem', () =>{
    it('normal test cases', () => {
        const expexted = 356;
        const input = [23171,21011,21123,21366,21013,21367];
        const actual = maxSlice(input);
        expect(actual).equal(expexted);        
    });
    it('normal test cases', () => {
        const expexted = 6;
        const input = [5,6,4,6,1,7];
        const actual = maxSlice(input);
        expect(actual).equal(expexted);        
    });
    it('normal test cases', () => {
        const expexted = 6;
        const input = [9,6,4,6,1,7];
        const actual = maxSlice(input);
        expect(actual).equal(expexted);        
    });
    it('normal test cases', () => {
        const expexted = 6;
        const input = [1,6,4,6,2,7];
        const actual = maxSlice(input);
        expect(actual).equal(expexted);        
    });
    it('normal test cases', () => {
        const expexted = -1;
        const input = [10,10,10,2,2,1];
        const actual = maxSlice(input);
        expect(actual).equal(expexted);        
    });
});