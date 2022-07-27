const Intern = require('../lib/Intern');
const intern = new Intern('Barb', '13', 'barb@work.net', 'Hawkins College');


//test to see if we a receiving the proper information
test ('get the value from the new intern object', ()=> {
    expect(intern.name).toBe('Barb');
    expect(intern.id).toBe('13');
    expect(intern.email).toBe('barb@work.net');
    expect(intern.school).toBe('Hawkins College')
});

//test each mathod to ensure that the correct information is being returned
test('test to see if we receive the name from getName()', () => {
    expect(intern.getName()).toBe('Barb');
});

test('test to see if we receive the id # from getId()', () => {
    expect(intern.getId()).toBe('13');
});

test('test to see if we receive the email from getEmail()', () => {
    expect(intern.getEmail()).toBe('barb@work.net');
});

test('test to see if we receive the school username from getSchool()', () => {
    expect(intern.getSchool()).toBe('Hawkins College');
});

test('test to see if we receive the role from getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});