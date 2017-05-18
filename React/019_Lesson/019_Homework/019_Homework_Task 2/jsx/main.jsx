// ### Задача 2  
// Создайте React компонент, который отображает на странице форму с полями ‘name’ , ‘login’ и кнопкой Submit 

var React = require('react');
var ReactDOM = require('react-dom');

class Form extends React.Component {
    render() {
        return (
            <form>
                <label>Name:
                    <input name="Name" type="text" />
                </label>
                
                <label>Login:
                    <input name="Login" type="text" />
                </label>
                
                <input type="submit" />
            </form>
        );
    }
}
ReactDOM.render(<Form />, document.getElementById("task"));