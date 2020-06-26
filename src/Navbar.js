import React, {Component} from 'react';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import Slider from 'rc-slider';
import './Navbar.css';
import { MenuItem } from '@material-ui/core';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { format:'hex' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({format: evt.target.value});
        this.props.handleChange(evt.target.value);
    }
    render() {
        const { level, changeLevel } = this.props;
        return (
            <div className="Navbar">
                <div className="logo">
                    <a href="#link">reactcolorpicker</a>
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
                <div className="select-container">
                    <Select value={this.state.format} onChange={this.handleChange}>
                        <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                        <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
            </div>
         );
    }
}

export default Navbar;
