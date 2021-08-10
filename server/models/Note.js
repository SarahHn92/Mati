const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    date_created: {
        type: Date,
        default: Date.now
    },
    noteBody: {
        type: String,
        required: 'Journalling is required.',
        minlength: 1,
        maxlength: 500,
        trim: true
    }
});

const Note = model('Note', noteSchema);

module.exports = Note;