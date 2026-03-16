import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { users } from "../models/userModel.js";
import { errorHandler } from "../utils/asyncErrorHandler.js";
import dotenv from 'dotenv';
dotenv.config();

passport.use(
  new Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL : "/auth/api/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await users.findOne({
          email : profile.emails[0].value
        })
    
        // continue the process here

      } catch (error) { 
        return done(error, null)
      }
    }
  )
)
