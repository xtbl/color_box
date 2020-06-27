import React, {Component} from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css';
import { MenuItem, Snackbar, IconButton, Select } from '@material-ui/core';
import { Close } from '@material-ui/icons';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { format:'hex', open: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);
    }
    handleChange(evt) {
        this.setState({format: evt.target.value});
        this.props.handleChange(evt.target.value);
        this.setState({open: true});
    }
    handleCloseClick(){
        this.setState({open: false});
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
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal:"left"}}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id="message-id">"Format changed!"</span>}
                    ContentProps={{"aria-describedby": "message-id"}}
                    action={[
                        <IconButton onClick={this.handleCloseClick}>
                            <Close />
                        </IconButton>
                    ]}
                />
            </div>
         );
    }
}

export default Navbar;
