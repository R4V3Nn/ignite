// ### Задача 1 
// Создайте React компонент-счетчик.
//  Он должен отображать на странице две кнопки (+ и -) и элемент h1 для вывода текущего счета на экран. 

const React = require('react');
const ReactDOM = require('react-dom');

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
    }

    add() {
        this.setState({ counter: this.state.counter + 1 });
    };

    delete() {
        this.setState({ counter: this.state.counter - 1 });
    };

    render() {
        return (
            <div>
                <h1>Result: {this.state.counter}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.delete}>Delete</button>

            </div>
        )
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById("root")
);

