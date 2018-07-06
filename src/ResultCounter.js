import { withStyles } from '@material-ui/core/styles/index'
import React, { Component } from 'react'
import './SimpleApp.css'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import {connect} from 'react-redux'

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: `0 ${theme.spacing.unit * 2}px`,
    },
});

class ResultCounter extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Badge color="primary" badgeContent={this.props.countries.length} className={classes.margin}>
            <Typography className={classes.padding}></Typography>
        </Badge>
        )
    }
}

function mapStateToProps(state, props) {
    return {countries:state.countries.data}
}

export default connect(mapStateToProps, {},null,{pure:false})(withStyles(styles)(ResultCounter))
