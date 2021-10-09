let schema = require('./schema')
let BA={};
BA.signup=async(data)=>{
    let result={};
    let res = schema.validate(data);
  if(res.error== undefined){
    if(data.showpass){     
        result.message=`Hello ${data.firstname} ${data.lastname}, Thank you for signing up. Your account is now created. You would be receiving our periodic newsletters to your email: ${data.email}`
    }else{
      result.message=`Hello ${data.firstname} ${data.lastname}, Thank you for signing up. Your account is now created’`
    }
  }else{
  result.message=res.error.details[0].message;
  }
  return result
}
module.exports=BA;