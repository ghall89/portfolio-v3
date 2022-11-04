import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleLeft,
	faLink,
	faUpRightFromSquare,
	faArrowLeft,
	faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import { getBlogPosts } from '../../lib/cosmicApi';
import ParsedJSX from '../sharedComponents/ParsedJsx';

import { H3, InlineLink, LinkButton } from '../sharedComponents/Typography';
import { Button } from '../sharedComponents/Inputs';
import { BlogTitle, BlogDate } from './components/Typography';

const linkAnimation = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	transition: { type: 'ease-in-out', duration: 0.5 },
};

const itemsPerPage = 4;

const Blog = () => {
	const [blogPosts, setBlogPosts] = useState();
	const [loading, setLoading] = useState(true);
	const [selectedPost, setSelectedPost] = useState();
	const [offset, setOffset] = useState(0);
	const [pageCount, setPageCount] = useState([]);

	useEffect(() => {
		getBlogPosts(setBlogPosts, setLoading, offset, itemsPerPage);
		window.scrollTo({ top: 0 });
	}, [offset]);

	const setGradient = slug => {
		if (slug === selectedPost) {
			return '';
		}
		return 'gradient-mask-b-0';
	};

	const isExpanded = slug => {
		if (slug === selectedPost) {
			return { height: 'fit-content' };
		}
		return { height: '208px' };
	};

	const isHidden = slug => {
		if (selectedPost && slug !== selectedPost) {
			return { height: '0px', opacity: 0, marginBottom: 0 };
		}
		if (selectedPost) {
			return { height: 'fit-content', opacity: 1, marginBottom: 0 };
		}
		return { height: 'fit-content', opacity: 1, marginBottom: 40 };
	};

	return (
		<>
			{loading ? null : (
				<>
					{blogPosts.objects.map(post => (
						<motion.div
<<<<<<< HEAD
							key={post.slug}
							initial={{
								height: 'fit-content',
								opacity: 1,
								marginBottom: 40,
							}}
=======
							key={post.id}
							initial={{ height: 'fit-content', opacity: 1, marginBottom: 40 }}
>>>>>>> main
							animate={isHidden(post.slug)}
							transition={{ duration: 0.5 }}
						>
							<div className="p-3 w-full border rounded-md border-slate-500 overflow-hidden">
								<BlogTitle>{post.title}</BlogTitle>
								<BlogDate date={post.published_at} />
								<motion.article
									className={`transition-[margin] mb-7 overflow-hidden ${setGradient(
										post.slug,
									)}`}
									initial={{ height: '208px' }}
									animate={isExpanded(post.slug)}
									transition={{ duration: 0.5 }}
								>
									<ParsedJSX input={post.content} />
								</motion.article>
								<AnimatePresence mode="wait">
									{!selectedPost || selectedPost !== post.slug ? (
										<motion.div
											key="read-more"
											variants={linkAnimation}
											initial="initial"
											animate="animate"
											exit="exit"
											transition="transition"
										>
											<LinkButton onClick={() => setSelectedPost(post.slug)}>
												<FontAwesomeIcon icon={faUpRightFromSquare} /> Read
												More...
											</LinkButton>
										</motion.div>
									) : (
										<motion.div
											key="close"
											className="flex flex-row gap-5"
											variants={linkAnimation}
											initial="initial"
											animate="animate"
											exit="exit"
											transition="transition"
										>
											<LinkButton onClick={() => setSelectedPost()}>
												<FontAwesomeIcon icon={faAngleLeft} /> Back
											</LinkButton>
											<InlineLink href={`/blog/${post.slug}`}>
												<FontAwesomeIcon icon={faLink} /> Permalink
											</InlineLink>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</motion.div>
					))}
					{selectedPost || pageCount.length === 1 ? null : (
						<div className="flex flex-row">
							<Button
								onClick={() => setOffset(offset - itemsPerPage)}
								disabled={offset === 0 ? true : false}
							>
								<FontAwesomeIcon icon={faArrowLeft} />
							</Button>
							<div className="flex-grow flex flex-row justify-center items-center">
								{pageCount.map(page => (
									<div
										onClick={() => setOffset((page.page - 1) * itemsPerPage)}
										className={`rounded-full h-2 w-2 m-1 ${
											page.active === true
												? 'bg-sky-400'
												: 'border-2 border-sky-400'
										}`}
									/>
								))}
							</div>
							<Button
								onClick={() => setOffset(offset + itemsPerPage)}
								disabled={
									blogPosts.total <= offset + itemsPerPage ? true : false
								}
							>
								<FontAwesomeIcon icon={faArrowRight} />
							</Button>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default Blog;
