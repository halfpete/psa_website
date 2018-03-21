import React, {Component} from 'react';
import { Row, Column } from 'react-foundation';
import styles from '../app/styles/main.css';


export default class App extends Component {
    render () {
        return (
            <div>
                <h1 id="peter_ahn">Peter Ahn</h1>
                <h1 id="about">About</h1>
                <h1 id="contact">Contact</h1>
            </div>
        )
    }
}
