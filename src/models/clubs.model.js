const mongoose = require('mongoose')

const clubSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    people: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'People',
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Club = mongoose.model('Club', clubSchema)

module.exports = Club
