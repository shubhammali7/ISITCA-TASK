const MeetingsController = require('../controllers/MeetingsController');
const router = require('express').Router();


//Method To Render Page Meeting
router.get('/', MeetingsController.renderPage);


//Method To Create New Meeting
router.post('/createMeeting',MeetingsController.createMeeting);


//Method to get all Users
router.get('/getAllMeetings',MeetingsController.getAllMeetings);


//Method to Update Meeting
router.put('/editMeeting/:meetingId',MeetingsController.editMeeting);


//Method to delete Meeting
router.delete('/deleteMeeting/:meetingId',MeetingsController.deleteMeeting);
  

module.exports = router;