import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import uniqueValidator from 'mongoose-unique-validator';


mongoose.plugin(uniqueValidator);

const UserSchema = new Schema({
  email: {
    type: String,
    unique: 'User with email "{VALUE}" already exist!',
    lowercase: true,
    required: 'Email is required',
    trim: true
  },
  password: {
    type: String,
    required: 'Password is required',
    trim: true
  },
  firstName: {
    type: String,
    lowercase: true,
    required: 'First name is required',
    trim: true
  },
  lastName: {
    type: String,
    lowercase: true,
    required: 'Last name is required',
    trim: true
  },
}, {
  timestamps: true,
});


UserSchema.statics.createFields = ['email', 'password', 'firstName', 'lastName'];


UserSchema.methods.comparePasswords = function(password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    const salt = bcrypt.genSaltSync(10);

    this.password = bcrypt.hashSync(this.password, salt);
  }

  next();
});


export default mongoose.model('user', UserSchema);
