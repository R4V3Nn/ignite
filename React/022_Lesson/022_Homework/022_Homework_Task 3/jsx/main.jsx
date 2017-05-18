const React = require('react');
const ReactDOM = require('react-dom');

class Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi() {
        //alert(`Hello, my name is ${this.fullName()}`);
    }
}
let person = new Person("Jack");
person.sayHi(); // Jack
class User extends Person {
    constructor(firstName, lastName, age, gender, signUpDate = 0, id) {
        super(firstName, lastName, age, gender);
        this.signUpDate = signUpDate;
        this.id = id;
    }
}
let user1 = new User('Ivan', 'Ivanov', '35', 'm', "7.12.1994", 22);
let user2 = new User('Rob', 'Lenovo', 22, 'm', '3.08.2000', 17);
let users = [user1, user2];
console.log(users); //вывод


class Table extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        let tableContent = users.map((elem, index) => {
            let rowContent = Object.keys(elem).map((prop, index) => {
                if (prop === 'firstName') {
                    return <td key={index} onClick={() => { elem.sayHi() }} style={{ cursor: 'pointer' }}>{elem[prop]}</td>
                }
                return <td key={index}>{elem[prop]}</td>
            });
            return <tr key={index}>{rowContent}</tr>
        });
        return (
            <table className="table">

                <tbody>{tableContent}</tbody>
            </table>
        );
    }
}

ReactDOM.render(
    <Table />,
    document.getElementById("root")
);