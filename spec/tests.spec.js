const { opposite } = require('../oppositenumber');
const { positiveSum } = require('../sumpositive.js');
const { repeatStr } = require('../repeatstring.js');
const { removeChar } = require('../removefirstlastletter');

describe("codewars kata's tests:", () => {
  test('sum of positive', () => {
    expect(positiveSum([1,2,3,4,5])).toBe(15);
    expect(positiveSum([1,-2,3,4,5])).toBe(13);
    expect(positiveSum([])).toBe(0);
    expect(positiveSum([-1,-2,-3,-4,-5])).toBe(0);
    expect(positiveSum([-1,2,3,4,-5])).toBe(9);
  });

  test('string repeat', () => {
    expect(repeatStr(6, '*')).toBe('******');
    expect(repeatStr(3, 'Hello')).toBe('HelloHelloHello');
    expect(repeatStr(5, '#')).toBe('#####');
    expect(repeatStr(3, ' _')).toBe(' _ _ _');
    expect(repeatStr(2, 'ha ')).toBe('ha ha ');
  });

  test('remove first and last character', () => {
    expect(removeChar('eloquent')).toBe('loquen');
    expect(removeChar('country')).toBe('ountr');
    expect(removeChar('person')).toBe('erso');
    expect(removeChar('place')).toBe('lac');
    expect(removeChar('ooopsss')).toBe('oopss');
  });

  test('find an opposite number', () => {
    expect(opposite(-1)).toBe(1);
    expect(opposite(0)).toBe(0);
    expect(opposite(-7)).toBe(7);
    expect(opposite(14)).toBe(-14);
    expect(opposite(-25.1)).toBe(25.1);
  });
})
