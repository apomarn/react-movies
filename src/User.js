// User.js
import React from "react";

class User extends React.Component {
    state = {} 
    render() {
        return (
            <div>
                <h2 style={{ backgroundColor: this.props.theColor }}>
                    Hello, {this.props.firstName}!
                </h2>
                <img src={this.props.pic} />
            </div>
        );
    }
}

export default User;