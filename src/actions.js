import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_WEATHER_PENDING,
  REQUEST_WEATHER_SUCCESS,
  REQUEST_WEATHER_FAILED
 } from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_WEATHER_PENDING })
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({ type: REQUEST_WEATHER_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_WEATHER_FAILED, payload: error }))
}