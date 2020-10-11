const { Router } = require('express');
const router = Router();
const User = require('../User');

router.post('/singup', async (req, res, next) => {
    const { username, email, password } = req.body;
     const user = new User ({
        username: username,
        email: email,
        password: password
    })
    user.password = await user.encryptPassword(user.password);
    await user.save();
    console.log("Guardado");
    res.json({message: 'Exito'});
});

router.post('/singin', (req, res, next) => {
res.json('singin')
});

router.get('/me', (req, res, next) => {
res.json('me')
});

module.exports = router;