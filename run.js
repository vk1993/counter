var event =  require("events");
const util = require("util");

//constructor 
var Person = function(name){
  this.name = name;
}

util.inherits(Person,event.EventEmitter);

var vishal = new  Person("Visal");
var Rhana = new Person("rahan");
var alima = new Person("alima");
var myEmitter = new event.EventEmitter();

var people = [vishal,Rhana,alima];

people.forEach(function(person){
    person.on('speaks',function(mess){
        console.log(person.name+' => '+ mess);
    })
})

Rhana.emit('speaks',"cool i am out");

