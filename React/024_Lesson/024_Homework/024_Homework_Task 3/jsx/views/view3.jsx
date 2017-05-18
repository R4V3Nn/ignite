var React = require('react');
var ReactDOM = require('react-dom');

class View3 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var userQuery = this.props.location.query;
        console.log(this.props.location.query);
        return (
            <div>
                <div>
                    <p>id: {this.props.params.id}</p>
                    <p>First name: {userQuery.first_name}</p>
                    <p>Last name: {userQuery.last_name}</p>
                    <p>Email: {userQuery.email}</p>
                    <p>Gender: {userQuery.gender}</p>
                    <p>IP: {userQuery.ip_address}</p>
                </div>
            </div>
        )
    }
}

module.exports = View3;