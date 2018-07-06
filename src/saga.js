import { put, takeEvery, call, throttle } from 'redux-saga/effects'
import axios2 from 'axios2'
import { FETCH_COUNTRIES_DATA, COUNTRIES_DATA } from './actions'

export function * helloSaga () {
    // yield takeEvery('*', function* (action) {
    //     console.log("hello saga", action)
    // })

    yield throttle(500, FETCH_COUNTRIES_DATA, function * (action) {
        try {

            //console.log("action", action)
            const response = yield call(axios2, {url: `https://restcountries.eu/rest/v2/name/${action.payload.query}`})
            //console.log("response", response.data)
            yield put({type: COUNTRIES_DATA, payload: response.data})
        } catch (ex) {
            //yield put({type:COUNTRIES_DATA, payload:response.data})
            console.log(ex)
        }
    })
}
