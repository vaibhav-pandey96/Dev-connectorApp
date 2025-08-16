import express from 'express';
import auth from '../middleware/auth.js';
import Profile from '../models/Profile.js';
import User from '../models/User.js';


const router = express.Router();

// @route    GET api/profile/me
// @desc     Get current user's profile
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);
    if (!profile) {
      return res.status(400).json({ msg: 'No profile found for this user' });
    }
    res.json(profile);
  } catch (err) {
    console.log(err);
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Get Github User
router.get('',auth, async (req, res) =>{
  const {
    status,
    skills,
    githubUsername,
  } = req.body;

  const profileFields = {};
  profileFields.user = req.user.id;
  if (status) profileFields.status = status;
  if (skills) profileFields.skills = skills.split(',').map(skill => skill.trim());
  if (githubUsername) profileFields.githubUsername = githubUsername;

  try {
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post('/', auth, async (req, res) => {
  const {
    bio,
    location,
    website,
    skills,
    githubusername,
    status,
  } = req.body;

  const profileFields = {};
  profileFields.user = req.user.id;
  if (bio) profileFields.bio = bio;
  if (location) profileFields.location = location;
  if (website) profileFields.website = website;
  if (githubusername) profileFields.githubusername = githubusername;
  if (skills) profileFields.skills = skills.split(',').map(skill => skill.trim());
  if (status) profileFields.status = status;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }

    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
  console.log('DELETE /api/profile route hit');
  try {
    await Profile.findOneAndDelete({ user: req.user.id });
    await User.findOneAndDelete({ _id: req.user.id });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.log(err);
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;

