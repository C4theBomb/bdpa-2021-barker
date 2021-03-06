const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    followedUsers: { type: Array, required: true, default: [] },
    pack: { type: Array, required: true, default: [] },
    bookmarked: { type: Array, required: true, default: [] },
    liked: { type: Array, required: true, default: [] },
    created: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model('Users', UserSchema);
