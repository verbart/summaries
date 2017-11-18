import mongoose, { Schema } from 'mongoose';
import uuid from 'uuid/v4';


const SummarySchema = new Schema({
  hash: {
    type: String,
    unique: 'Hash must be unique'
  },
  userId: {
    type: String,
    required: 'User id is required',
  },
  title: {
    type: String,
    required: 'Title is required',
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  skype: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    required: 'Description is required',
    trim: true,
  },
  tags: {
    type: [String],
    required: 'Tags is required',
    trim: true,
  },
  history: [{
    companyName: {
      type: String,
      required: 'Company name is required',
      trim: true,
    },
    title: {
      type: String,
      required: 'Company name is required',
      trim: true,
    },
    date: {
      start: {
        type: Date,
        required: 'Start date is required',
      },
      end: {
        type: Date,
      },
    },
    currentWork: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: 'Description is required',
      trim: true,
    },
  }],
});

SummarySchema.statics.createFields = ['title', 'phone', 'skype', 'description', 'history', 'tags'];

SummarySchema.pre('save', function(next) {
  if (!this.hash) {
    this.hash = uuid();
  }

  next();
});


export default mongoose.model('summary', SummarySchema);
