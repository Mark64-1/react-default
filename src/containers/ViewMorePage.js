import React from 'react';
import style from '../static/style/ViewMoreStyle.css'
import Roll from '../components/ViewMore/main/Roll';
import Profile from '../components/ViewMore/main/Profile';

const ViewMorePage = () => {
	return (
		<div className="more">
			<h1>더보기</h1>
			<Roll/>
			<Profile/>
		</div>
	);
};


export default ViewMorePage;
