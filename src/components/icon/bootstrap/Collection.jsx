import * as React from 'react';

function SvgCollection(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M2.5 3.5a.5.5 0 010-1h11a.5.5 0 010 1h-11zm2-2a.5.5 0 010-1h7a.5.5 0 010 1h-7zM0 13a1.5 1.5 0 001.5 1.5h13A1.5 1.5 0 0016 13V6a1.5 1.5 0 00-1.5-1.5h-13A1.5 1.5 0 000 6v7zm1.5.5A.5.5 0 011 13V6a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-13z' />
		</svg>
	);
}

export default SvgCollection;
