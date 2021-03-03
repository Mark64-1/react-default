import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from './components/App.js'
import Index from './components/Index.js'
import About from './components/About.js'
import NoMatch from './components/NoMatch.js'

import EditPage from '../containers/EditPage'
import ViewMorePage from '../containers/ViewMorePage'
import ProfilePage from '../containers/ProfilePage'

const Router = () => {
  return (

    <BrowserRouter>
    	<div>
    		<Switch>
    			<Route exact path='/' component={} />
    			<Route path='/EditPage' component={editPage} />
    			<Route path='/ProfilePage' component={profilePage} />
    		</Switch>
    	</div>
    </BrowserRouter>
  )
}

// function viewMorePage({match}) {
// 	oneLoad();
// 	return <ViewMorePage />;
// }
//
// function editPage({match}) {
// 	oneLoad();
// 	return <EditPage />;
// }
// function profilePage({match}) {
// 	oneLoad();
// 	return <ProfilePage />;
// }

function oneLoad() {
  if (window.name != 'reload' && window.innerWidth < 960) {
    window.name = 'reload'
    window.location.reload(true)
  } else window.name = ''
}

export default Router
