export function add (x: number, y: number){
    return x + y;
}

describe('Inital Test', ()  => {
    it('add function', () => {
        expect(add(1, 2)).toEqual(3);
    });
});