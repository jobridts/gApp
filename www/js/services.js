angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];
  
   var persons = [
    {id: 0, Naam: 'Dirickx', Voornaam: 'Elias', GeboorteDatum:"1994-11-16T00:00:00", Type: "Leiding", title: "1", description: "1e"},
    {id: 1, Naam: 'Vanderoost', Voornaam: 'Elias', GeboorteDatum:"1991-09-25T00:00:00", Type: "Leiding", title: "2", description: "2e"},
    {id: 2, Naam: 'Serrien', Voornaam: 'Elies', GeboorteDatum:"1993-11-12T00:00:00", Type: "Leiding", title: "3", description: "3e"},
    {id: 3, Naam: 'Gielis', Voornaam: 'Evelien', GeboorteDatum:"1993-10-20T00:00:00", Type: "Leiding", title: "4", description: "4e"},
    {id: 4, Naam: 'Elsen', Voornaam: 'Lies', GeboorteDatum:"1992-09-07T00:00:00", Type: "Leiding", title: "5", description: "5e"},
    {id: 5, Naam: 'Van Asch', Voornaam: 'Hanne', GeboorteDatum:"1993-02-24T00:00:00", Type: "Leiding", title: "6", description: "6e"},
    {id: 6, Naam: 'Bridts', Voornaam: 'Jo U', GeboorteDatum:"1989-05-22T00:00:00", Type: "Uitgeschreven", title: "7", description: "7e"},
    {id: 7, Naam: 'Bridts', Voornaam: 'Jo Li', GeboorteDatum:"1989-05-22T00:00:00", Type: "Lid", title: "8", description: "8e"}
  ];

  return {
    all: function() {
      return persons;
    },
    get: function(petId) {
      // Simple index lookup
      var person = persons[petId];
      person.fullName = person.Voornaam + " " + person.Naam;
      return person;
      //return persons[petId];
    }
  }
});
