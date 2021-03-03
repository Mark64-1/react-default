import React from 'react';
import {Link} from 'react-router-dom';

const SetProfileButton = ({linkURL}) => {
	return (
		<Link to={linkURL}>
			<div className="SetProfileButton">
				<svg
					width='11'
					height='16'
					viewBox='0 0 33 55'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g filter='url(#filter0_d)'>
						<path
							d='M4 42.6847L7.79177 46.875L29 23.4375L7.79177 0L4 4.19034L21.4165 23.4375L4 42.6847Z'
							fill='#D0D0D0'
						/>
					</g>
					<defs>
						<filter
							id='filter0_d'
							x='0'
							y='0'
							width='33'
							height='54.875'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood
								flood-opacity='0'
								result='BackgroundImageFix'
							/>
							<feColorMatrix
								in='SourceAlpha'
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							/>
							<feOffset dy='4' />
							<feGaussianBlur stdDeviation='2' />
							<feColorMatrix
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
							/>
							<feBlend
								mode='normal'
								in2='BackgroundImageFix'
								result='effect1_dropShadow'
							/>
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='effect1_dropShadow'
								result='shape'
							/>
						</filter>
					</defs>
				</svg>
			</div>
		</Link>
	);
};

export default SetProfileButton;
