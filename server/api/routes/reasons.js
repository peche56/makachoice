import express from 'express';
import Reason from '../models/reason.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {


    var reason = new Reason();


    router.post('/', reason.create);


    app.use('/reasons', router);

};
