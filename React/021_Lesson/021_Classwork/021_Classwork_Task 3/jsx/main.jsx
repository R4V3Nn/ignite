// ### Задача 3 
// Модифицируйте код предыдущей задачи. Добавьте на странцу три кнопки: сбросить счет (reset), start и stop,
//  которые предоставя пользователю останавлтвать/возобновлять работу таймера и сбрасывать отсчитанное время. 


const React = require('react');
const ReactDOM = require('react-dom');

class Timer extends React.Component {
    constructor() {
        super();
        this.flag=true;
        this.state = {
            counter: 0
        };
        this.add = this.add.bind(this);
        this.set = this.set.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    };

    add() {
        this.setState({ counter: this.state.counter + 1 });
    };

    set() {
        this.interval = setInterval(this.add, 1000);
    };

    resetTimer() {
        this.setState({ counter: 0 });
    };
    startTimer() {
        if (this.flag) {
            this.set();
        }
        this.flag = false;

    };
    stopTimer() {
        clearInterval(this.interval);
        this.flag = true;
    };

    

    render() {
        return (
            <div>
                <h2>RESULT: {this.state.counter}</h2>
                <button onClick={this.resetTimer}>Reset</button>
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.stopTimer}>Stop</button>

            </div>
        );
    }
}

ReactDOM.render(
    <Timer />,
    document.getElementById("root")
);