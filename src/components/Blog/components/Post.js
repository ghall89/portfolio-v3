import parse from 'html-react-parser';

import { H3, P } from '../../sharedComponents/Typography';

const options = {
  replace: ({ attribs, children }) => {
    if (!attribs) {
      return;
    }

    if (attribs.type === 'p') {
      return <P>{domToReact(children, options)}</P>;
    }
  },
};

const Post = ({ data }) => {
  return (
    <>
      <H3>{data.title}</H3>
      <article>{parse(data.content, options)}</article>
    </>
  );
};

export default Post;
