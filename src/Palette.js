import React, {Component} from 'react';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div className="Palette">
                <h1>Palette</h1>
                <div className="Palette-colors">
                    {/* color boxes here */}
                </div>
                {/* footer */}
            </div>
         );
    }
}

export default Palette;