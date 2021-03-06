import React, { Component } from "react";
import  MiniPalette  from "./MiniPalette";
import { withStyles } from "@material-ui/styles";

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        diplay: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    }
};

class PaletteList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
        console.log(`goToPalette`)
    }
    render() {
        const { palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette =>
                            <MiniPalette
                                key={palette.id} {...palette}
                                handleClick={() => this.goToPalette(palette.id)}/>
                                // arrow function to replace binding
                        )}
                    </div>
                </div>
            </div>
         );
    }
}

export default withStyles(styles)(PaletteList);