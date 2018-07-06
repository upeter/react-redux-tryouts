import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './App'
import { helloSaga } from './saga'
import createSagaMiddelware from 'redux-saga'
import { FETCH_COUNTRIES_DATA,COUNTRIES_DATA } from './actions'

const initialState = {countries: {data: []}}

const countryReducer = (state = initialState, {type, payload}) => {
    console.log(type, payload)
    if(type == COUNTRIES_DATA) {
        state.countries.data = payload

    }
    return state
}
const sagaMiddleware = createSagaMiddelware()
const store = createStore(countryReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(helloSaga)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)