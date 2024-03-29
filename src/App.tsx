/**
 * Client root component
 *
 * @author Vinh Le <lethanhvinh95@gmail.com>
 *
 */

import * as React from 'react'
import {hot} from 'react-hot-loader/root'

import {Route, Switch, Redirect} from 'react-router-dom'

// Components
import CoreLayout from './shared/layout/CoreLayout/CoreLayout'

// Code splitting
const Home = React.lazy(() =>
	import(/* webpackChunkName: "Home" */ './pages/Home/Home'),
)
const About = React.lazy(() =>
	import(/* webpackChunkName: "About" */ './pages/About/About'),
)

// Constants
import {RouterPath} from './constants'
import ErrorBoundaries from './shared/components/ErrorBoundaries/ErrorBoundaries'

class App extends React.Component {
	render() {
		return (
			<React.Suspense fallback={<div>Loading...</div>}>
				<ErrorBoundaries>
					<CoreLayout>
						<Switch>
							<Route exact path={RouterPath.home} component={Home} />
							<Route path={RouterPath.about} component={About} />
							<Redirect to={RouterPath.home} />
						</Switch>
					</CoreLayout>
				</ErrorBoundaries>
			</React.Suspense>
		)
	}
}

export default hot(App)
