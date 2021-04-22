const MeetingModel =require('../models/MeetingModel');
const UserTypeModel = require('../models/UserTypeModel');
const apiRes = require('../helpers/apiResponse');
const superAdminSideBarItems = require('../config/user_routes/superadmin').sideBarItems;

class MeetingsController{


    // Method to render page   
   renderPage = [
       async(req, res)=>{
           return res.render('meetings/index');
       }
   ];


   //Create meeting
   createMeeting =[
    async(req, res)=>{
        try {
          let newMeeting = await new MeetingModel(req.body).save();
      
          return res.send(newMeeting).status(201);
        } catch (err) {
          return res.send(err.message).status(500);
        }
      }
   ];


   //Get All meeting
   getAllMeetings=[
    async(req, res)=>{
        try {
          let meetings = await MeetingModel.find();
          return res.send(meetings).status(200);
          
        } catch (err) {
          return res.send(err.message).status(500);
        }
      }
      
   ];


   //Edit meeting
   editMeeting=[
    async(req, res)=>{
        try {
          let meeting = await MeetingModel.findOneAndUpdate({_id: req.params.meetingId}, {$set: req.body}, {new: true});
          return res.send(meeting).status(201);
        } catch (err) {
          return res.send(err.message).status(500);
        }
      }
   ];


    //Delete meeting
   deleteMeeting=[
    async(req, res)=>{
        try {
          await MeetingModel.findOneAndDelete({_id: req.params.meetingId});
          return res.sendStatus(200);
        } catch (err) {
          return res.send(err.message).status(500);
        }
      }
   ];
}

module.exports = new MeetingsController();