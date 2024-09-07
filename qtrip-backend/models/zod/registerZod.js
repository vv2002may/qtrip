const zod = require("zod");

const registerZod = zod.object({
   email: zod.string().email(),
   password: zod.string().min(6),
   confirmPassword: zod.string().min(6),
})

module.exports = registerZod;