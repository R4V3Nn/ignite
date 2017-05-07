var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
    render() {
        return <h1>A + B={parseInt(this.props.a) + parseInt( this.props.b)}</h1>
    }
})

ReactDOM.render(<Component a = "5" b = "6"/>, document.getElementById('task'));