var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Link = router.Link;

class View1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        var listElemArr = [];


        for (var i = 0; i < this.props.route.data.length; i++) {
            listElemArr.push(<li key={i}>
                <Link to={{ pathname: `/listView/${this.props.route.data[i].id}`, query: { ...this.props.route.data[i] } }}>
                    {this.props.route.data[i].first_name + ' ' + this.props.route.data[i].last_name}
                </Link>
            </li>)
        }
        return <div><ul className="list-group">{listElemArr}</ul></div>
    }
}

module.exports = View1;