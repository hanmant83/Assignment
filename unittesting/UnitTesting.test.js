var expect = require('chai').expect;
var BA = require('../classes/BA');
describe('singn testing',()=>{
it('should return error message firstname required',async function(){
    let data={
        "firstname":"",
        "lastname":"Shinde",
        "email":"hanmantshinde01@gmail.com",
        "password":"Abcd@1234",
        "subscribe":0
    }
    let res = await BA.signup(data);
    //assert.equal(isValid, true);
    expect(res.message).to.a('string');
    expect(res.message).equal('"firstname" is not allowed to be empty');

});
it('should return error message lastname required',async function(){
    
    let data={
        "firstname":"Hanamnt",
        "lastname":"",
        "email":"hanmantshinde01@gmail.com",
        "password":"Abcd@1234",
        "subscribe":0
    }
    let res = await BA.signup(data);
    //assert.equal(isValid, true);
    expect(res.message).to.a('string');
    expect(res.message).equal('"lastname" is not allowed to be empty');
});
it('should return error message email required',async function(){
    
    let data={
        "firstname":"Hanamnt",
        "lastname":"shinde",
        "email":"",
        "password":"Abcd@1234",
        "subscribe":0
    }
    let res = await BA.signup(data);
    //assert.equal(isValid, true);
    expect(res.message).to.a('string');
    expect(res.message).equal('"email" is not allowed to be empty');
});
it('should return error message password required',async function(){
    
    let data={
        "firstname":"Hanamnt",
        "lastname":"shinde",
        "email":"hanmantshinde01@gmail.com",
        "password":"",
        "subscribe":0
    }
    let res = await BA.signup(data);
    //assert.equal(isValid, true);
    expect(res.message).to.a('string');
    expect(res.message).equal('"password" is not allowed to be empty');
});
it('should return success message',async function(){
    
    let data={
        "firstname":"Hanamnt",
        "lastname":"shinde",
        "email":"hanmantshinde01@gmail.com",
        "password":"Abcd@1234",
        "showpass":"yes"
    }
    let res = await BA.signup(data);
    //assert.equal(isValid, true);
    expect(res.message).to.a('string');
    expect(res.message).equal('Hello Hanamnt shinde, Thank you for signing up. Your account is now created. You would be receiving our periodic newsletters to your email: hanmantshinde01@gmail.com');
});
})