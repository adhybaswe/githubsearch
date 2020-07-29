const initState = {
   loading : false, 
   datas: [],
   error : null
}

export default (state = initState, action) => {
   switch (action.type) {
    case 'FETCH_GITHUB_LOADING':
      return  {
        ...state,
        loading: true,
        error : null
      }
    case 'FETCH_GITHUB_SUCCESS':
      return  {
        loading: false,
        datas : action.payload.data,
        error : null
      }
    case 'FETCH_GITHUB_ERROR':
      return  {
        loading: false,
        datas : [],
        error : action.payload
      }  
    default:
          return state
    }
}