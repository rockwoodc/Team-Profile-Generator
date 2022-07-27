const Employee = require('../lib/Employee');
const employee = new Employee('Barb', '13', 'barb@work.net');
// jest.mock('.lib/Employee');

//test to see if we a receiving the proper information
test ('get the value from the new employee object', ()=> {
    expect(employee.name).toBe('Barb');
    expect(employee.id).toBe('13');
    expect(employee.email).toBe('barb@work.net');
});

//test each mathod to ensure that the correct information is being returned
test('test to see if we receive the name from getName()', () => {
    expect(employee.getName()).toBe('Barb');
});

test('test to see if we receive the id # from getId()', () => {
    expect(employee.getId()).toBe('13');
});

test('test to see if we receive the email from getEmail()', () => {
    expect(employee.getEmail()).toBe('barb@work.net');
});

test('test to see if we receive the role from getRole()', () => {
    expect(employee.getRole()).toBe('Employee');
});