import mongoose from 'mongoose';


const usermodel = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  profilePic: { type: String, required: false, default: '' },
  password: { type: String, required: true },
  status: { type: String, required: true, default: 'pending'},
  verificationCode: { type: String, required: false},
},{
    timestamps:true
}
);

const User = mongoose.model('Students', usermodel);

export default User;