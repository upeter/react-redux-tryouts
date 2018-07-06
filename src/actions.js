export const FETCH_COUNTRIES_DATA = 'EVENT_LOG/FETCH_COUNTRIES_DATA';
export const COUNTRIES_DATA = 'EVENT_LOG/COUNTRIES_DATA'
export const fetchCountries = (query) => ({
    type:FETCH_COUNTRIES_DATA,
    payload: {
        query
    }
})