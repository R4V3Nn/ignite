var React = require('react');

var appStore = require('../Stores/appStore');
var appActions = require('../Actions/appActions');

// flux Controller Views / Представления — React-компоненты, которые собирают состояние хранилищ и передают его дочерним компонентам через свойства

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            num1: appStore.changeNum1(),
            num2: appStore.changeNum2(),
            result1: appStore.getResult(),
        }

        this.add = this.add.bind(this)
        this.sub = this.sub.bind(this)
        this.mul = this.mul.bind(this)
        this.div = this.div.bind(this)
        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);



    }

    componentWillMount() {
        appStore.on('num1', () => {
            this.setState({ num1: appStore.changeNum1() })
        }
        )
        appStore.on('num2', () => {
            this.setState({ num2: appStore.changeNum2() })
        }
        )

        appStore.on('add', () => {
            this.setState({ result1: appStore.add() })
        }
        )

        appStore.on('sub', () => {
            this.setState({ result1: appStore.sub() })

        }
        )
        appStore.on('mul', () => {
            this.setState({ result1: appStore.mul() })

        }
        )
        appStore.on('div', () => {
            this.setState({ result1: appStore.div() })

        }
        )
    }

    setNum1(e) {
        appStore.changeNum1(e.target.value);
    }
    setNum2(e) {
        appStore.changeNum2(e.target.value);
    }
    add() {
        appActions.add1();
    }
    sub() {
        appActions.sub1();
    }
    mul() {
        appActions.mul1();
    }
    div() {
        appActions.div1();
    }



    render() {
        return (
            <div className="panel well">
                <input type="text" placeholder="Enter Number 1" onChange={this.setNum1} value={this.state.num1} />
                <input type="text" placeholder="Enter Number 2" onChange={this.setNum2} value={this.state.num2} />

                <button className="btn btn-success" onClick={this.add}>Add</button>
                <button className="btn btn-success" onClick={this.sub}>Sub</button>
                <button className="btn btn-success" onClick={this.mul}>Mul</button>
                <button className="btn btn-success" onClick={this.div}>Div</button>
                <h1> {this.state.result1} </h1>
            </div>
        )
    }
}

module.exports = App; 