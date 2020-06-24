import React, {Component} from 'react';
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500  };
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(newLevel) {
        this.setState( {level: newLevel});
    }

    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const colorBoxes = colors[level].map(color => <ColorBox background={color.hex} name={color.name}/>)
        return (
            <div className="Palette">
                <h1>Palette</h1>
                <Navbar level={level} changeLevel={this.changeLevel}/>
                <div className="Palette-colors">
                    {/* color boxes here */}
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
         );
    }
}

export default Palette;