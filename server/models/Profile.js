import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    company: {
        type: String,
    },
    status: {
        type: String,
        required: true,
    },
    skills: {
        type: [String],
        required: true,
    },
    bio: {
        type: String,
    },
    githubusername: {
        type: String,
    },
    location:{
        type:String,
    },
    experience: [
        {
            title: { type: String, required: true },
            company: { type: String, required: true },
            location: String,
            from: { type: Date, required: true },
            to: Date,
            current: { type: Boolean, default: false },
            description: String,
        },
    ],
    social: {
        twitter: String,
        linkedin: String,
        instagram: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    
});

const Profile = mongoose.model('Profile', ProfileSchema);
export default Profile;