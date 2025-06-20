    import express from "express";
    import bcrypt from "bcryptjs";
    import jwt from "jsonwebtoken";
    import gravatar from "gravatar";
    import User from "../models/User.js";
    import dotenv from "dotenv";

    dotenv.config();

    const router = express.Router();
    router.post("/", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
        return res.status(400).json({ msg: "User already exists" });
        console.log(token);
        }

        const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
        });

        // New User Object
         user = new User({
        name,
        email,
        avatar,
        password,
        });

        //Hash Password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save user to DB
        await user.save();

        // Generate JWT
        const payload = {
        user: {
            id: user.id,
        },
        };

        jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
        (err, token) => {
            if (err) throw err;
            res.json({ token });
        }
        );  
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
    });




    export default router;
