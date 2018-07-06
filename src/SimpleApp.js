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
import axios2 from 'axios2'

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
    console.log('List', props)
    return (
        <Paper>
            <List component="nav">
                {
                    props.data.map(item => (<ListItem button>
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
class SimpleApp extends Component {
    static initialState = {name: '', data: []}
    state = SimpleApp.initialState

    handleChange = (evt) => {
        this.setState({name: evt.target.value})
        // console.log(evt.target.value, evt)
        axios2({url: `https://restcountries.eu/rest/v2/name/${evt.target.value}`}).then((response) => {
            //console.log(response.data)
            this.setState({data: response.data})
        })
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
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <TextField
                    label="Name"
                    id="margin-none"
                    defaultValue="Default Value"
                    className={classes.textField}
                    helperText="Search a country"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <CountryList data={this.state.data}/>

            </div>
        )
    }

    componentDidMount () {
        console.log('componentDidMount()')
    }

    componentDidUpdate () {
        console.log('componentDidUpdate()')
    }

    componentDidCatch () {
        console.log('componentDidCatch()')

    }
}

export default withStyles(styles)(SimpleApp)
//export default App;
