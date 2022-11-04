import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { H3 } from '../../sharedComponents/Typography';

const BlogTitle = ({ children }) => (
	<H3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-300 to-cyan-500">
		{children}
	</H3>
);

const BlogDate = ({ date }) => (
	<span className="text-slate-300">
		<FontAwesomeIcon className="mr-3" icon={faCalendarAlt} />
		{`Posted on ${format(new Date(date), 'MMM do, y')}`}
	</span>
);

export { BlogTitle, BlogDate };
