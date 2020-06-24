import React, {Component} from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const { level, changeLevel } = this.props;
        return (
            <div className="Navbar">
                <div className="logo">
                    <a href="#">reactcolorpicker</a>
                </div>
                <div className="slider-container">
                    <span className="slider-container">Level: {level}</span>
                    <div className="slider">
                        <Slider
                            defaultValue = { level }
                            min = { 100 }
                            max = { 900 }
                            step = { 100 }
                            onAfterChange = { changeLevel }
                        />
                    </div>
                </div>
            </div>
         );
    }
}

export default Navbar;
