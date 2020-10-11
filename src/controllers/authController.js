const { Router } = require('express');
const router = Router();

router.post('/singup', (req, res, next) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);
});

router.post('/singin', (req, res, next) => {
res.json('singin')
});

router.get('/me', (req, res, next) => {
res.json('me')
});

module.exports = router;