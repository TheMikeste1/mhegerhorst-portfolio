import sum from '../public/sum';

// https://jestjs.io/docs/getting-started
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});