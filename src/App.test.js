import { add } from './App';

test('add', () => {
    const value = add(1, 2);
    expect(value).toEqual(3)
})