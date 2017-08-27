import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class Home extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUserBox(user) {
        return (
            <div key={user.name} className="card">
                <div className="card-block">
                    <h4 className="card-title">{user.name}</h4>
                    <p className="card-text">{user.company.name}</p>
                    <a className="btn btn-primary" href={user.website}>Website</a>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="user-list">
                {this.props.users.map(this.renderUserBox)}
            </div>
        );
    }
}

export default connect(
    state => ({ users: state.users }),
    { fetchUsers }
)(Home);



