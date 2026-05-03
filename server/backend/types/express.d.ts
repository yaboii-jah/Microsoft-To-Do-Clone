import { Types } from 'mongoose';

declare global {
  namespace Express {
    interface User {
      _id: Types.ObjectId;
      username?: string | null;
      googleId?: string | null;
      avatar?: string | null;
    }
 }
}