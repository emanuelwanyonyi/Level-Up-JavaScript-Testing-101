import { add, total } from './App';

// Unit Test
test('add', () => {
    expect(add(1, 2)).toEqual(3)
}) 

// An intergrated test, since the total functions relays on add function
test('total', () => {
    expect(total(5, 20)).toEqual('Ksh. 25')
}) 