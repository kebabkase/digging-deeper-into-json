/*

Task was to find one room from below datastructure that was false for all four people
For example: ballroom has false value for all four people.
Learnt how to use underscore.js library 
*/

var _ = require('underscore');

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];


var roomsInfo =  _.map(newDevelopment, person =>{
    return person.rooms;
})

var rooms = _.flatten(roomsInfo);
var notSuspectRooms=[];
var suspectRooms=[];
for(let room of rooms ){
    for(let key in room){
        if(room[key])
            notSuspectRooms.push(key);
        else
            suspectRooms.push(key);
    }
}

console.log(_.uniq(_.difference(suspectRooms,notSuspectRooms)));