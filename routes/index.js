// calling express
const express = require('express');

// calling router function
const router = express.Router();

// exporting the routes globally accessible
module.exports = router;

// calling contorller
const indexController = require('../controller/index')

router.get('/', indexController.getHome)

// calling the post method
router.post('/register', indexController.postHome)

router.get('/edit/:id', indexController.getEdited);

router.get('/delete/:id', indexController.getDeleted);

router.post('/update/:id', indexController.update);
