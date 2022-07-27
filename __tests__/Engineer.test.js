const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Barb', '13', 'barb@work.net', 'barbHub');


//test to see if we a receiving the proper information
test ('get the value from the new engineer object', ()=> {
    expect(engineer.name).toBe('Barb');
    expect(engineer.id).toBe('13');
    expect(engineer.email).toBe('barb@work.net');
    expect(engineer.gitHub).toBe('barbHub')
});

//test each mathod to ensure that the correct information is being returned
test('test to see if we receive the name from getName()', () => {
    expect(engineer.getName()).toBe('Barb');
});

test('test to see if we receive the id # from getId()', () => {
    expect(engineer.getId()).toBe('13');
});

test('test to see if we receive the email from getEmail()', () => {
    expect(engineer.getEmail()).toBe('barb@work.net');
});

test('test to see if we receive the GiHub username from getGitHUb()', () => {
    expect(engineer.getGitHub()).toBe('barbHub');
});

test('test to see if we receive the role from getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});