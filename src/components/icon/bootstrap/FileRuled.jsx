import * as React from 'react';

function SvgFileRuled(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M2 2a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V2zm2-1a1 1 0 00-1 1v4h10V2a1 1 0 00-1-1H4zm9 6H6v2h7V7zm0 3H6v2h7v-2zm0 3H6v2h6a1 1 0 001-1v-1zm-8 2v-2H3v1a1 1 0 001 1h1zm-2-3h2v-2H3v2zm0-3h2V7H3v2z' />
		</svg>
	);
}

export default SvgFileRuled;
