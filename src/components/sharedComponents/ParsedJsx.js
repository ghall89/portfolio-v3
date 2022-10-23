import { useEffect, useState } from 'react';
import Imagge from 'next/image';
import JsxParser from 'react-jsx-parser';
import { P, H1, H2, H3, H4, InlineLink, List, NumList } from './Typography';

const convertString = string =>
	string
		.replaceAll('<p', '<P')
		.replaceAll('</p', '</P')
		.replaceAll('<h1', '<H1')
		.replaceAll('</h1', '</H1')
		.replaceAll('<h2', '<H2')
		.replaceAll('</h2', '</H2')
		.replaceAll('<h3', '<H3')
		.replaceAll('</h3', '</H3')
		.replaceAll('<h4', '<H4')
		.replaceAll('</h4', '</H4')
		.replaceAll('<a', '<InlineLink')
		.replaceAll('</a', '</InlineLink')
		.replaceAll('<ul', '<List')
		.replaceAll('</ul', '</List')
		.replaceAll('<ol', '<NumList');
const ParsedJSX = ({ input }) => {
	const jsx = convertString(input);
	return (
		<JsxParser
			components={{ P, H1, H2, H3, H4, InlineLink, List, NumList }}
			jsx={jsx}
		/>
	);
};

export default ParsedJSX;
