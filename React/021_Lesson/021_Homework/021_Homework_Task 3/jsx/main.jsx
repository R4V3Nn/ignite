// ### Задача 3
// Создайте React-компонент, содержащий форму со следующими полями: 
// * Name 
// * Email 
// * Phone number 
// * Message 
// Используя обработчики событий,  реализуйте валидацию формы

const React = require('react');
const ReactDOM = require('react-dom');

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            nameClass: '',
            emailClass: '',
            telClass: '',
            messageClass: ''
        }
        this.handlerChangeName = this.handlerChangeName.bind(this);
        this.handlerChangeEmail = this.handlerChangeEmail.bind(this);
        this.handlerChangeTel = this.handlerChangeTel.bind(this);
        this.handlerChangeMessage = this.handlerChangeMessage.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }
    handlerChangeName(e) {
        var nameRegExp = /^[A-Za-z ]+$/;
        var addClass = 'valid';
        if (!nameRegExp.test(e.target.value)) {
            addClass = 'invalid';
        }
        if (e.target.value === '') {
            addClass = '';
        }
        this.setState({ nameClass: addClass });
    };
    handlerChangeEmail(e) {
        var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var addClass = 'valid';
        if (!emailRegExp.test(e.target.value)) {
            addClass = 'invalid';
        }
        if (e.target.value === '') {
            addClass = '';
        }
        this.setState({ emailClass: addClass });
    };
    handlerChangeTel(e) {
        var telRegExp = /^[0-9]+$/;
        var addClass = 'valid';
        if (!telRegExp.test(e.target.value)) {
            addClass = 'invalid';
        }
        if (e.target.value === '') {
            addClass = '';
        }
        this.setState({ telClass: addClass });
    };
    handlerChangeMessage(e) {
        var messageRegExp = /^.{10,}$/;
        var addClass = 'valid';
        if (!messageRegExp.test(e.target.value)) {
            addClass = 'invalid';
        }
        if (e.target.value === '') {
            addClass = '';
        }
        this.setState({ messageClass: addClass });
    };
    handlerSubmit(e) {
        if (this.state.nameClass === 'valid' && this.state.emailClass === 'valid' && this.state.telClass === 'valid' && this.state.messageClass === 'valid') {
            alert('Success, data sent to the server!');
        }
        else {
            alert('Fail, data not valid!');
            e.preventDefault();
        }
    };
    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <div >
                    <input type="text" className={this.state.nameClass} onChange={this.handlerChangeName} placeholder="Enter name" />
                    <p>(only english letters)</p>
                </div>
                <div className="form-group">
                    <input type="email" className={this.state.emailClass} onChange={this.handlerChangeEmail} placeholder="Enter email" />
                    <p>(require valid email)</p>
                </div>
                <div className="form-group">
                    <input type="tel" className={this.state.telClass} onChange={this.handlerChangeTel} placeholder="Enter tel" />
                    <p>(only numbers)</p>
                </div>
                <div className="form-group">
                    <input type="text" className={this.state.messageClass} onChange={this.handlerChangeMessage} placeholder="Enter message" />
                    <p>(minimum 10 symbols)</p>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-lg btn-info" value="Submit" />
                </div>
            </form>
        );
    }
}

ReactDOM.render(
    <Form />,
    document.getElementById("root")
);