import { update } from "./AppLogic";

describe('Making sure the library works', () => {
  test('Jest works', () => {
    expect('string').toBe('string');
    // toBe: === comparison
    expect(2).toBe(2);
  })
})

describe('Going over matchers', () => {
  beforeAll(() => {
    // runs before all tests start
    // setup a connection to a mock db
    // used for dummy data for the tests
  })
  afterAll(() => {
    //runs after all the tests are completed
    //shut down connection to mock db
  })
  beforeEach(() => {
    //fires before each test
  })
  afterEach(() => {
    //fires after each test
  })
  //test.only will let you run just one test in the test library so you can focus on one test
  //test.skip will skip a test
  test('other comparisons', () => {
    // not: !==
    expect(2).not.toBe(4)
    //toEqual: used to compare objects and other non-primitive values
    expect({name: 'Beth'}).toEqual({name: 'Beth'})
  })
  
  
  test('Number comparisons', () => {
    expect(2).toBeGreaterThan(1);
    expect(4).toBeGreaterThanOrEqual(4);
    expect(4).toBeGreaterThanOrEqual(3);
    expect(3).toBeLessThan(4);
    expect(2).toBeLessThanOrEqual(2);
    expect(2).toBeLessThanOrEqual(5);
  })
  
  test('misc', () => {
    let pizza = 2;
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(pizza).toBeDefined();
    expect('something').toBeTruthy();
    expect(null).toBeFalsy();
  })
})

describe('Update tests', () => {
  test('returns a truthy', () => {
    let result = update(2, 3);
    expect(result).toBeTruthy();
  })
})