// ### Задача 1 
// Создайте React компонент, отображающий кнопку и элемент div.
//  Добавьте на страницу тег style с двумя классами – black и red, задающими соответствующий background-color элементу.
//   Реализуйте переключение этих классов для элемента div при клике по кнопке. 

const React = require('react');
const ReactDOM = require('react-dom');

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bgcolor: 'red' }
    }

    handlerButtonClick() {
        this.setState({ bgcolor: (this.state.bgcolor == 'red') ? 'green' : 'red' });
    }

    render() {
        return (
            <div>
                <div className={this.state.bgcolor}></div>
                <p><button onClick={this.handlerButtonClick.bind(this)}>Change class</button></p>
            </div>
        )
    }
}

ReactDOM.render(
    <MyComponent />,
    document.getElementById("root")
);
