const ManageusersController = require('../controllers/ManageusersController');
const router = require('express').Router();


//Router To Render Manageuser Page
router.get('/', ManageusersController.renderPage);


//method to create new user
router.post('/createUser',ManageusersController.createUser);


//method to get all users
router.get('/getAllUsers',ManageusersController.getAllUsers);


//method to Update users
router.put('/editUser/:userId',ManageusersController.editUser);


//method to delete users
router.delete('/deleteUser/:userId',ManageusersController.deleteUser);

module.exports = router;