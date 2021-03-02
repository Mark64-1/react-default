import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import EditPage from '../containers/EditPage';
import ViewMorePage from '../containers/ViewMorePage';
import ProfilePage from '../containers/ProfilePage';

const Router = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path='/' component={viewMorePage} />
					<Route path='/EditPage' component={editPage} />
					<Route path='/ProfilePage' component={profilePage} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

function viewMorePage({match}) {
	oneLoad();
	return <ViewMorePage />;
}

function editPage({match}) {
	oneLoad();
	return <EditPage />;
}
function editPage({match}) {
	oneLoad();
	return <ProfilePage />;
}

function oneLoad() {
	if (window.name != 'reload' && window.innerWidth < 960) {
		window.name = 'reload';
		window.location.reload(true);
	} else window.name = '';
}

export default Router;
