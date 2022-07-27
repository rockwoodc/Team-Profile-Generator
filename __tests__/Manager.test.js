const Manager = require('../lib/Manager');
const manager = new Manager('Barb', '13', 'barb@work.net', '6');


//test to see if we a receiving the proper information
test ('get the value from the new manager object', ()=> {
    expect(manager.name).toBe('Barb');
    expect(manager.id).toBe('13');
    expect(manager.email).toBe('barb@work.net');
    expect(manager.officeNumber).toBe('6')
});

//test each mathod to ensure that the correct information is being returned
test('test to see if we receive the name from getName()', () => {
    expect(manager.getName()).toBe('Barb');
});

test('test to see if we receive the id # from getId()', () => {
    expect(manager.getId()).toBe('13');
});

test('test to see if we receive the email from getEmail()', () => {
    expect(manager.getEmail()).toBe('barb@work.net');
});

test('test to see if we receive the office number from getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('6');
});

test('test to see if we receive the role from getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});