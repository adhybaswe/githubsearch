import React from 'react'
import { useSelector } from 'react-redux'

const Repo = () => {

	const data = useSelector(state => state.githubReducer)

	return(
		<div className="list-repos">
	        {
	          data.datas.map( (value,index) => {
	            return(
	              <div key={index} className="repo">{value.name}</div>
	            )
	          })
	        }
		</div>
	)
}

export default Repo