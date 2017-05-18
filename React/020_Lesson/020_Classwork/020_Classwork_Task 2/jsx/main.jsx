// ### Задача 2 
// Создайте React компонент, который имеет два свойства(props) типа number  и свойство mode типа boolean.
// В зависимости от значения свойства mode(true / false) компонент должен выводить на экран либо сумму свойств типа number,
//     либо результат их конкатенации.

const React = require('react');
const ReactDOM = require('react-dom');

class Component extends React.Component {

    render() {
        return <p>{(this.props.mode ? 0 : '') + this.props.val1 + this.props.val2}</p>
    }
}

Component.PropTypes = {
    val1: React.PropTypes.number.isRequired,
    val2: React.PropTypes.number.isRequired,
    mode: React.PropTypes.bool.isRequired,
}

ReactDOM.render(
    <div>
        <Component val1={5} val2={5} mode={true} />
        <Component val1={5} val2={5} mode={false} />
    </div>,
    document.getElementById('task')
)