const express = require('express');
const { validateAssertion } = require('../../auth/OAuth2');

const authRouter = express.Router();
const authPath = '/auth';

authRouter.get(authPath, async (req, res) => {
    const assertion = req.header('X-Goog-IAP-JWT-Assertion');
    let email = 'None';
    try {
        const info = await validateAssertion(assertion);
        email = info.email;
    } catch (error) {
        console.log(error);
    }
    res.status(200).send(`Hello ${email}`).end();
});
module.exports = {
    authRouter,
};
