import passport from "passport";
import { Strategy } from "passport-local";
import { findUser } from "../models/userModel.js";
import { errorResponse } from "../utils/responseFormat.js";
import bcrypt from "bcrypt"

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await findUser({_id : id})
    console.log(user)

    if (!user) {
      done(null, false, new errorResponse(false, 'User not Found', 'USER_NOT_FOUND' ))
    }
    done(null, user)

  } catch (err) {
    done(err, null)
  }
})

export default passport.use(
  new Strategy({usernameField : "email"}, async (email, password, done) => {
    try {
      const user = await findUser({email : email})
      
      if (!user) {
        return done(null, false, new errorResponse(false, 'User not Found', 'USER_NOT_FOUND' ))
      }

      const isMatch = bcrypt.compare(password, user.password)

      if (!isMatch) {
        return done(null, false, new errorResponse(false, 'Invalid Password', 'INVALID_DATA' ))
      }

      done(null, user)

    } catch (err) {
      done(err, null)
    }
  })
)