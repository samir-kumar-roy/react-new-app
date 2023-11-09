import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div style={{ width: "100%" }}>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link class="navbar-brand" to="/">NewsTank</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-item nav-link active" to="/">Home</Link>
                            <Link class="nav-item nav-link" to="/general">General</Link>
                            <Link class="nav-item nav-link" to="/sports">Sports</Link>
                            <Link class="nav-item nav-link" to="/business">Business</Link>
                            <Link class="nav-item nav-link" to="/health">Health</Link>
                            <Link class="nav-item nav-link" to="/science">Science</Link>
                            <Link class="nav-item nav-link" to="/technology">Technology</Link>
                            <Link class="nav-item nav-link" to="/entertainment">Entertainment</Link>
                        </div>

                    </div>
                </nav>
                <Outlet />
            </div>
        )
    }
}
