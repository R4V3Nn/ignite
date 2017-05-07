var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
    render() {
        return <h1>Hello World!</h1>
    }
})

ReactDOM.render(<Component/>, document.getElementById('task'));