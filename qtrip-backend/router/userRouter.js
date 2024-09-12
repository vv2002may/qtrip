const express = require('express');
const { register, login, cities, adventuresController, reservationsController } = require('../controller');
const { userAuth } = require('../middleware');


const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/cities', cities);
userRouter.get('/adventures', adventuresController.adventures);
userRouter.get('/adventures/details', adventuresController.adventuresDetails);
userRouter.get('/reservations', userAuth, reservationsController.reservations);
userRouter.post('/reservations/new', userAuth, reservationsController.reservationsNew);
userRouter.post('/reservations/add', userAuth, reservationsController.reservationsAdd);
userRouter.post('/reservations/cancel', userAuth, reservationsController.reservationsCancel);
userRouter.delete('/reservations/delete', userAuth, reservationsController.reservationsDelete);

module.exports = userRouter;