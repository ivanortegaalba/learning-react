/*
* Modules dependecies
*/
var React = require('react')


var Level = React.createClass({
    render: function(){
        return <span>
            nivel {this.props.level}
        </span>
    }
});

module.exports = Level;
