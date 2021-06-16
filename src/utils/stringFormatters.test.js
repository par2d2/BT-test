import { shortString } from './stringFormatters';

const string1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

describe('getEverything', () =>{

    test('should return a string length of 13', async ()=>{
        const result = shortString(string1, 10);
        expect(result.length).toBe(13)
    })

    test('should return a string length of 153', async ()=>{
        const result = shortString(string1, 150);
        expect(result.length).toBe(153)
    })

    test('should return a string length of 449', async ()=>{
        const result = shortString(string1, 10000);
        expect(result.length).toBe(445)
    })

})