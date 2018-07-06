import React, { Component } from 'react'
import logo from './logo.svg'
import './SimpleApp.css'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import {connect} from 'react-redux'
import {fetchCountries} from './actions'
import ResultCounter from './ResultCounter'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    type: {
        fontSize: '30px'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
})

const CountryList = (props) => {
    return (
        <Paper>
            <List component="nav">
                {
                    props.data.map(item => (<ListItem button key={item.name}>
                        <ListItemText primary={item.name}/>
                    </ListItem>))
                }
            </List>
        </Paper>
    )

}

/**
 * has props
 * has state
 */
class App extends Component {
    static initialState = {name: '', data: []}
    state = App.initialState

    handleChange = (evt) => {
        this.setState({name: evt.target.value})
        this.props.fetchCountries(evt.target.value)
    }

    render () {
        const {classes} = this.props
        return (
            <div className="App" onClick={this.props.myFun}>
                <div className={classes.root}>
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <Typography variant="title" color="inherit" className={classes.type}>
                                Hello React
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <TextField
                    label="Name"
                    id="margin-none"
                    defaultValue="Default Value"
                    className={classes.textField}
                    helperText="Search a country"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <ResultCounter/>
                <CountryList data={this.props.countries}/>

            </div>
        )
    }
}


function mapStateToProps(state, props) {
    return {countries:state.countries.data}
}

export default connect(mapStateToProps, {fetchCountries},null,{pure:false})(withStyles(styles)(App))