import React, { Component } from "react";
import { Link } from "react-router-dom";
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1>Snake Game</h1>
                <p>This is a game made with React</p>
                <Link to="/game" className="link-button">Play Game!</Link>
            </div>
        );
    }
}

export default Home;
