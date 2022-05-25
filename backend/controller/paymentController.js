import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';



// @desc  Update order to paid
// @route  GET /api/pay
// @access Private

const updateUserSubscription = asyncHandler(async (req, res) => {
    console.log(req.user)
  const user = await User.findById(req.user._id);

  if (user) {
    user.subscription = true;
    user.paymentMethod = 'PayPal';
    user.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    

    const updateUser = await user.save();

    res.json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      trial: updateUser.trial,
      token: generateToken(updateUser._id),
      subscription: updateUser.subscription,
    });
  } else {
    res.status(404);
    res.json({ message: 'User not found' });
  }
});

export default updateUserSubscription