import { format } from 'date-fns';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { getBlogPost } from '../../../lib/cosmicApi';

import { H3 } from '../../sharedComponents/Typography';
import { BlogTitle, BlogDate } from './Typography';
import ParsedJSX from '../../sharedComponents/ParsedJsx';
import FourOhFour from '../../404';

const Post = ({ slug }) => {
	const [post, setPost] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getBlogPost(setPost, setLoading, slug);
	}, [slug]);

	return (
		<>
			{loading ? null : (
				<>
					{!post ? (
						<FourOhFour />
					) : (
						<>
							<BlogTitle>{post.title}</BlogTitle>
							<BlogDate date={post.published_at} />

							<article>
								<ParsedJSX input={post.content} />
							</article>
						</>
					)}
				</>
			)}
		</>
	);
};

export default Post;
