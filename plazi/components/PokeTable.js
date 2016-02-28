/*
* Modules dependecies
*/
var React = require('react')
var PokeRow = require('./PokeRow')

var PokeTable = React.createClass({
    render: function(){
        return <ul>
            {this.props.pokemons.map( function(pokemon){
                return <PokeRow key={pokemon.number} name={pokemon.name} level={pokemon.level} />
            })}
        </ul>
    }
})

module.exports = PokeTable;
