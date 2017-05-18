var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Link = router.Link;
class View2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        var tableArr = [];


        for (var i = 0; i < this.props.route.data.length; i++) {
            tableArr.push(<tr key={i}><td><Link to={{ pathname: `/tableView/${this.props.route.data[i].id}`, query: { ...this.props.route.data[i] } }}>
                {this.props.route.data[i].first_name}
            </Link></td><td>{this.props.route.data[i].last_name}</td><td>{this.props.route.data[i].gender}</td></tr>);
        }
        return <div><table className="table"><tbody>{tableArr}</tbody></table></div>
    }
}

module.exports = View2;