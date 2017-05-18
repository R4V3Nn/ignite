// ### Задача 1 
// Создайте React компонент Parent, отображающий на странице произвольный текст в теге h1.
// Создайте дочерний компонент Child, отображающий произвольный текст в теге h3. 

const React = require('react');
const ReactDOM = require('react-dom');

class Parent extends React.Component {
    render() {
        return <h1>Hello from h1 {this.props.children}</h1>
    }
}

class Child extends React.Component {
    render() {
        return <h3>Hello from h3</h3>

    }
}

ReactDOM.render(
    <Parent><Child /></Parent>,
    document.getElementById('task')
);