
const jsw = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const tokenSign = async (user) => {
  const sign = jsw.sign({
    [user.id]: user.id,
    nsme: user.name
  },
  JWT_SECRET,
  {
    expiresIn: '2h'
  }
  )
  return sign
}

module.exports = { tokenSign }
