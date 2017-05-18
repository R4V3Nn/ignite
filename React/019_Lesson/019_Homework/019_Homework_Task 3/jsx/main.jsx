// ### Задача 3 
// Создайте React компонент, который отображает на странице произвольный текст. Компонент должен иметь такие свойства: color и fontSize. 
// Установите на основе этих свойств стили для компонента. 


var React = require('react');
var ReactDOM = require('react-dom');


var Text = React.createClass({
    propTypes: {
        color: React.PropTypes.string,
        fontSize: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ])
    },

    render() {
        return <p style={{ color: this.props.color, fontSize: parseFloat(this.props.fontSize) }}>Метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).</p>;
    },
});

ReactDOM.render(<Text color="green" fontSize="25" />, document.getElementById("task"));

