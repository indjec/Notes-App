const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes....';

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        savedNotes(notes);
        console.log(chalk.green.inverse('New note addded'));
    } else {
        console.log(chalk.red.inverse('Note title already exists'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed!!'));
        savedNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No Note Found!!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((note) => {
        console.log(chalk.green.inverse('Title:') + chalk.green(" " + note.title) + "      " + chalk.yellow.inverse('Body:') + chalk.yellow(" " + note.body));
    })
}

const readList = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if (note) {
        console.log(chalk.green.inverse('Title:') + chalk.green(" " + note.title) + "      " + chalk.yellow.inverse('Body:') + chalk.yellow(" " + note.body));
    } else {
        console.log(chalk.red.inverse('Note not found :('))
    }
}

const savedNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readList: readList,
}