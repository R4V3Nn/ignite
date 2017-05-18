const React = require('react');
const ReactDOM = require('react-dom');

class View2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        var tableArr = [];


        for (var i = 0; i <this.props.route.data.length; i++) {
            tableArr.push(<tr key={i}><td>{this.props.route.data[i].first_name}</td><td>{this.props.route.data[i].last_name}</td><td>{this.props.route.data[i].gender}</td></tr>);
        }
        return <table className="table"><tbody>{tableArr}</tbody></table>
    }
}

module.exports = View2;