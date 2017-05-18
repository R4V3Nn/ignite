import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.inputHandler = this.inputHandler.bind(this)
    }

    inputHandler(e) {
        this.props.handler(e.target.value);
    }

    render() {
        return (
            <div>
                <div className="input-group">
                    <input type="text" className="form-control" value={this.props.text} onChange={this.inputHandler} placeholder="Enter some text" />
                </div>
                <h2>Text: {this.props.text}</h2>
            </div>
        )
    }
}

export default Input;