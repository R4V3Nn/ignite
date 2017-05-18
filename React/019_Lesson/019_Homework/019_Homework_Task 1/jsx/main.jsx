// ### Задача 1 
// Создайте React компонент, который выведет на экран массив users в виде таблицы. 
// Массив users для задачи: 
// ```
// var users = [{name:"Anne Montgomery",gender:"Female"},
// {name:"Annie George",gender:"Female"},
// {name:"Gary Butler",gender:"Male"},
// {name:"Lisa Mendoza",gender:"Female"},
// {name:"Marilyn Henry",gender:"Female"},
// {name:"Johnny Tucker",gender:"Male"},
// {name:"Chris Jacobs",gender:"Male"},
// {name:"Benjamin James",gender:"Male"}] 
// ```

var React = require('react');
var ReactDOM = require('react-dom');

var users = [{ name: "Anne Montgomery", gender: "Female" },
{ name: "Annie George", gender: "Female" },
{ name: "Gary Butler", gender: "Male" },
{ name: "Lisa Mendoza", gender: "Female" },
{ name: "Marilyn Henry", gender: "Female" },
{ name: "Johnny Tucker", gender: "Male" },
{ name: "Chris Jacobs", gender: "Male" },
{ name: "Benjamin James", gender: "Male" }]

class TableRow extends React.Component {
    render() {
        var { data } = this.props;
        var row = data.map((data) =>


            <tr>

                <td key={data.name}>{data.name}</td>
                <td key={data.gender}>{data.gender}</td>
            </tr>


        );
        return (
            <span>{row}</span>
        );
    }

}

class Table extends React.Component {
    render() {
        return (
            <table>
                <TableRow data={this.props.data} />
            </table>
        );
    }
}
ReactDOM.render(<Table data={users} />, document.getElementById("task"));