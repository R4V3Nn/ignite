// ### Задача 3 
// Создайте React компонент,  который принимает два числа в качестве свойств (props).
//  Компонент должен выводить на экран сумму своих свойств. 

var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
    render() {
        return <h1>A + B={parseInt(this.props.a) + parseInt( this.props.b)}</h1>
    }
})

ReactDOM.render(<Component a = "5" b = "6"/>, document.getElementById('task'));