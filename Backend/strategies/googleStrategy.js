import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { users } from "../models/userModel.js";
import dotenv from 'dotenv';
dotenv.config();

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await users.findById({
      _id :  id 
    })

    if (!user) return done (null, false)

    done(null, user)
  } catch (err) {
    done (err, null)
  }
})

export default passport.use(
  new Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL : "/auth/api/google/callback",
      proxy : true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await users.findOneAndUpdate(
          {email},
          {
            $setOnInsert: {
              email : profile.emails[0].value,
              username : profile.displayName,
              googleId : profile.id,
              avatar : profile.photos[0].value
            }
          },
          {new : true, upsert: true}
        )

        return done(null, user)

      } catch (error) {
        console.error("Google Auth Error: ", error)
        return done(error, null)
      }
    }
  )
)
