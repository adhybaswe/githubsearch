import React from 'react'

const Loading = ({active}) => {

	return(
		 <div className={active ? "loader" : ""}></div>
	)
}

export default Loading