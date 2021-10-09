const Joi = require('joi');

const schema = Joi.object({
    firstname: Joi.string()
        .required(),
    lastname: Joi.string()
        .required(),
    email: Joi.string()
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),    
    password: Joi.string()
        .min(8)
        .max(30)
        .required(),

    mobile: Joi.string()
        .min(10)
        .max(10),
    showpass: Joi.string(),   

})
module.exports =schema;