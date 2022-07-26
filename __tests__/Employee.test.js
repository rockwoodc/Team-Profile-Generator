const Employee = require('../lib/Employee');
// jest.mock('.lib/Employee');

console.log(new Employee());

test ('creates a new employee object', ()=> {
    const employee = new Employee('Barb');

    expect(employee.name).toBe('Barb');
    expect(employee.id).toBe(Number);
    expect(employee.email).toBe('barb@work.net');

});