/*
* Modules dependecies
*/
var React = require('react')
var PokeTable = require('./components/PokeTable')

var pokemons = [
    {number:1, name : "primero", level:1},
    {number:2, name : "segundo", level:2},
    {number:3, name : "tercero", level:3},
];


React.render(<PokeTable pokemons={pokemons} />, document.getElementById('container'))
