const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Create add command
yargs.command({
    command: 'add',
    description: 'Add a new note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    description: 'Remove a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//Create List command
yargs.command({
    command: 'list',
    description: 'List all note!',
    handler(){
        notes.listNotes()
    }
})

//Create remove command
yargs.command({
    command: 'read',
    description: 'Read a note!',
    builder: {
        title:{
            describe: 'Read a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readList(argv.title);
    }
})

yargs.parse()
