import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './actions/githubActions';
import Repo from './components/Repo' 
import Loading from './components/Loading' 

function App() {

  const dispatch = useDispatch()
  const data = useSelector(state => state.githubReducer)
  const [user,setUser] = React.useState('')

  const onProccess = () => {
    dispatch(fetchUser(user))
  }

  return (
    <div className="App">
      <div className="search-form">
        <h1>Search Github User</h1>
        <input type="text" placeholder="Search..." value={user} onChange={ (e) => setUser(e.target.value) } />
        <button onClick={onProccess} className="btn">Search</button>
        <Loading active={data.loading} />
        <Repo />
        {
          data.error != null ? 
          <div className="error">{data.error.message}</div>
          : <div></div>
        }
      </div>
    </div>
  );
}

export default App;
