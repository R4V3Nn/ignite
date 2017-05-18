const React = require('react');
const ReactDOM = require('react-dom');

class View1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        var listElemArr = [];


        for (var i = 0; i <this.props.route.data.length; i++) {
            listElemArr.push(<li key={i}>{this.props.route.data[i].first_name + ' ' + this.props.route.data[i].last_name}</li>)
        }
        return <ul className="list-group">{listElemArr}</ul>
    }
}

module.exports = View1;