import React, {Component} from 'react';
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: "hex"  };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(newLevel) {
        this.setState( {level: newLevel});
    }
    changeFormat(val) {
        alert(val);
        this.setState({format: val});
    }

    render() {
        const { colors } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(
            color => <ColorBox key={color.name} background={color[format]} name={color.name}/>);
        return (
            <div className="Palette">
                <h1>Palette</h1>
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
         );
    }
}

export default Palette;