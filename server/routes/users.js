const { usersController } = require("../controller")
const express = require('express')

const router = express.Router();

router.get('/', usersController.getALl);

router.post('/', usersController.createOne);

router.get('/:id', usersController.getOne);

router.patch('/:id', usersController.updateById);

router.delete('/:id', usersController.deleteOne);

module.exports = router;