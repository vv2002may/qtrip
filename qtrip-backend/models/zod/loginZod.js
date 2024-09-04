const zod = require('zod');

const loginZod = zod.object({
   email: zod.string().email(),
   password: zod.string()
})

module.exports = loginZod;