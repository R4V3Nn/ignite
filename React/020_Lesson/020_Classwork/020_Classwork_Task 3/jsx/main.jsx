// ### Задача 3 
// Создайте React компонент, который содержит checkbox и элемент div.
// При клике по checkbox элементу div присваиваиваются новые стили (выбор стиля призвольный). 

const React = require('react');
const ReactDOM = require('react-dom');

var Component = React.createClass({

    getInitialState() {
        return {
            isChecked: false,
        }
    },
    handleInputChange() {
        this.setState({ isChecked: !this.state.isChecked });
    },
    render() {
        return (
            <div>
                <input type="checkbox" checked={this.state.isChecked} onChange={this.handleInputChange} />
                <div className={this.state.isChecked ? 'style1' : 'style2'}>MyComponent</div>
            </div>
        );
    }
})

ReactDOM.render(
    <Component/>,
    document.getElementById('task')
);