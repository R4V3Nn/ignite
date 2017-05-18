// ### Задача 2 
// Создайте страницу-калькулятор. 
// На странице должно быть 4 кнопки(по кнопке на математическую операцию: сложение, вычитание, умножение, деление),
//  2 поля ввода и элемент для отображения результата. Сделайте так, чтобы в поля ввода разрешалось вводить только цифры.


const React = require('react');
const ReactDOM = require('react-dom');


class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            num1: '',
            num2: '',
            result: "",
        }
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
        this.mul = this.mul.bind(this);
        this.div = this.div.bind(this);
        this.num1 = this.num1.bind(this);
        this.num2 = this.num2.bind(this);
    }

    add() {
        this.setState({ result: +this.state.num1 + +this.state.num2 });
    };

    sub() {
        this.setState({ result: +this.state.num1 - +this.state.num2 });
    };

    mul() {
        this.setState({ result: +this.state.num1 * +this.state.num2 });
    };

    div() {
        this.setState({ result: +this.state.num1 / +this.state.num2 });
    };

    num1(e) {
        var num11 = e.target.value.replace(/\D/, '');
        this.setState({ num1: num11 });
    };

    num2(e) {
        var num22 = e.target.value.replace(/\D/, '');
        this.setState({ num2: num22 });
    };

    render() {
        this.result = "";
        return (
            <div>
                <input type="text" placeholder="Enter Number 1" onChange={this.num1} value={this.state.num1} />
                <input type="text" placeholder="Enter Number 2" onChange={this.num2} value={this.state.num2} />
                <h1> {this.state.result}</h1>
                <button onClick={this.add}>+</button>
                <button onClick={this.sub}>-</button>
                <button onClick={this.mul}>*</button>
                <button onClick={this.div}>/</button>
            </div>
        )
    }

}

ReactDOM.render(
    <Calculator />,
    document.getElementById("root")
);