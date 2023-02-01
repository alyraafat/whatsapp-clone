import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    password: String,
    friendsAndMessages: Object 
});
export default mongoose.model('user',userSchema);