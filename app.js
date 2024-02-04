const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const mongoose = require('mongoose');
const express = require('express');
const app = express();

const userRouter = require('./route/users')



mongoose.connect('mongodb://127.0.0.1:27017/bycapp')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.log('Cannot Connect to MongoDB...', err))