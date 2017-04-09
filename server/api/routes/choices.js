import express from 'express';
import Search from '../models/choice.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {


    var choice = new Choice();

    router.post('/', choice.create);


    app.use('/choices', router);
};
