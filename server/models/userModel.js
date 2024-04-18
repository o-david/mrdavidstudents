import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const userSchema = new mongoose.Schema({
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

userSchema.methods.matchPassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre("save", async function(next){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model('Students', userSchema);
export default User;

