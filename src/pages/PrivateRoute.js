import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
// will remove later

const PrivateRoute = ({ children, ...rest }) => {
	const { user } = useAuth0()
	// console.log(rest)
	// console.log('from checkout')
	return (
		<Route
			{...rest}
			render={() => {
				return user ? children : <Redirect to='/' />
			}}
		></Route>
	)
}
export default PrivateRoute
