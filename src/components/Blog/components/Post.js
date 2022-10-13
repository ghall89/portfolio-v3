import parse from 'html-react-parser';

import { H3, P } from '../../sharedComponents/Typography';

const options = {
  replace: (domNode) => {
    if (domNode.attribs && domNode.name === 'p') {
      return <P>{domNode.children[0].data}</P>;
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
