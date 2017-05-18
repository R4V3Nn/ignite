var React = require('react');

var appStore = require('../Stores/appStore');
var appActions = require('../Actions/appActions');

// flux Controller Views / Представления — React-компоненты, которые собирают состояние хранилищ и передают его дочерним компонентам через свойства

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            timeValue: 0
        }

        this.startHandler = this.startHandler.bind(this)
        this.stopHandler = this.stopHandler.bind(this)
        this.resetHandler = this.resetHandler.bind(this)

        this.setTimeValue = this.setTimeValue.bind(this)
    }

    componentWillMount() {
        var interval;
        // создание обработчика flux actions / Действий
        appStore.on('startCount', () => {
            appStore.startCount();
            interval = setInterval(this.setTimeValue, 1000);
        }
        )

        appStore.on('stopCount', () => {
            appStore.stopCount();
            clearInterval(interval);
            this.setTimeValue();
        }
        )

        appStore.on('resetCount', () => {
            appStore.resetCount();
            clearInterval(interval);
            this.setTimeValue();
        }
        )
    }

    setTimeValue() {
        this.setState({ timeValue: appStore.getTimeValue() });
    }

    componentDidMount() {
        appActions.startCount();
    }

    startHandler() {
        appActions.startCount();
    }

    stopHandler() {
        appActions.stopCount();
    }

    resetHandler() {
        appActions.resetCount();
    }

    render() {
        return (
            <div className="panel well">


                <button className="btn btn-success" onClick={this.startHandler}>Start</button>
                <button className="btn btn-success" onClick={this.stopHandler}>Stop</button>
                <button className="btn btn-success" onClick={this.resetHandler}>Reset</button>
                <h1> {this.state.timeValue} </h1>
            </div>
        )
    }
}

module.exports = App;