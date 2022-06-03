const mongoose = require('mongoose')

const peopleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    salary: {
      type: Number,
    },
    type: {
      type: String,
      enum: ['player', 'trainer'],
      required: true,
    },
    club: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Club',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const People = mongoose.model('People', peopleSchema)

module.exports = People
