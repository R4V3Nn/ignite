// ### Задача 2 
// Создайте страницу-таймер, которая будет отображать количество секунд, прошедшее с момента ее открытия. 

const React = require('react');
const ReactDOM = require('react-dom');

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
        this.startTimer = this.startTimer.bind(this);
    }

    startTimer() {
        setTimeout(() => {
            this.setState({ counter: this.state.counter + 1 });
        }, 1000);
        return this.state.counter;
    }

    render() {
        return (
            <div><h2>RESULT: {this.startTimer()}</h2></div>
        );
    }
}

ReactDOM.render(
    <Timer />,
    document.getElementById("root")
);