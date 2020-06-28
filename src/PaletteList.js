import React, { Component } from "react";
import { Link } from "react-router-dom";
import  MiniPalette  from "./MiniPalette";

class PaletteList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const { palettes } = this.props;
        return (
            <div>
                <MiniPalette/>
                {palettes.map(palette =>
                    <MiniPalette key={palette.id} {...palette}/>
                    // <Link
                    //     to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                        )
                }
            </div>
         );
    }
}

export default PaletteList;