const users = require ('../utils/users')

const login = (req,res)=>{

  const {email, password} = req.query

  const findUsers = users.find(el=>el.email === email && el.password === password)

  return findUsers
  ? res.status(200).json({access: true})
  : res.status(200).json({access: false});
}





module.exports = login;