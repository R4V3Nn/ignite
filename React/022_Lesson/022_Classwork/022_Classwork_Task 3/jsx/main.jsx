// ### Задача 3 
// Используя синтаксис ES6, создайте React компонент,
//  содержащий кнопку и выводящий на экран при клике по кнопке свои свойства(props) в виде списка. 

const React = require('react');
const ReactDOM = require('react-dom');

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);
    }
    tick() {
        document.getElementById('ul').remove();
        let ul = document.createElement('ul');
        ul.id = "ul";
        document.getElementById('example').appendChild(ul);
        Object.keys(this.props).map((prop, index) => {
            let li = document.createElement('li');
            li.innerHTML = this.props[prop];
            document.getElementById('ul').appendChild(li);
        });


    }

    render() {

        return (<div> <button onClick={this.tick}> ShowProps </button>
        </div>);
    }
}

ReactDOM.render(
    <Counter prop1="prop-1" prop2="prop-2" prop3="prop-3"/>,
    document.getElementById("example")
);