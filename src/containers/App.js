import React, {Component} from 'react';
import { Row, Column } from 'react-foundation';
import styles from '../app/styles/main.css';


export default class App extends Component {
    render () {
        return (
            <div>
                <div class="header">
                    <h1 id="peter_ahn">Peter Ahn</h1>
                    <h1 id="about">About</h1>
                    <h1 id="contact">Contact</h1>
                </div>
                <body>
                    <div>
                        <img src="../images/americana.png" id="wallpaper_header"/>
                    </div>
                    <div class="row" id="grid_padding">
                        <div class="column">
                            <img src="../images/Untitled-1.jpg" id="grid_image"/>
                            <img src="../images/americana.png" id="grid_image"/>
                            <img src="../images/Untitled-1.jpg" id="grid_image"/>
                        </div>
                        <div class="column">
                            <img src="../images/Untitled-1.jpg" id="grid_image"/>
                            <img src="../images/Untitled-1.jpg" id="grid_image"/>
                            <img src="../images/Untitled-1.jpg" id="grid_image"/>
                        </div>
                    </div>
                </body>
            </div>
        )
    }
}
