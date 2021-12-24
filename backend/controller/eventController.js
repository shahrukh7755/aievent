import Event from '../models/eventModel.js'
import asyncHandler from 'express-async-handler'




//@desc Fetch all event
//@route get /api/events
//@access public   


const getEvents = asyncHandler(
    async (req, res) => {
        const events = await Event.find({});
        console.log("events:",events);
        res.json(events)
     }
)


//@desc Fetch single event
//@route get /api/events/:id
//@access public   


const getEventByid = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id);
    if(event){
        res.json(event)
    }else{
        res.status(404);
        throw new Error('event not found')
    }
    
})


export { getEvents, getEventByid }

