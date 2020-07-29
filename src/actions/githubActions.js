import axios from 'axios'

export const fetchLoading = ()=>{
    return{
        type: 'FETCH_GITHUB_LOADING'
    }
}

export const fetchSuccess = (data)=>{
    return{
        type: 'FETCH_GITHUB_SUCCESS',
        payload : data
    }
}

export const fetchError = (message)=>{
    return{
        type: 'FETCH_GITHUB_ERROR',
        payload : message
    }
}

export const fetchUser = (user) => {
    return function(dispatch){
        dispatch(fetchLoading())
        axios.get(`https://api.github.com/users/${user}/repos`)
        .then(response => {
            dispatch(fetchSuccess(response))
        })
        .catch(error => {
            dispatch(fetchError(error.response.data))
        })
    }
}
