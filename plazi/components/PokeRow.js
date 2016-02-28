/*
* Modules dependecies
*/
var React = require('react')
var Level = require('./Level')

var PokeRow = React.createClass({
    render: function(){
        return <li>
            El pokemon {this.props.name} tiene <Level level={this.props.level}/>
        </li>
    }
});

module.exports = PokeRow;
