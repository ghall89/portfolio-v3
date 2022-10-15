import parse from 'html-react-parser';

import {
  H1,
  H2,
  H3,
  H4,
  InlineLink,
  P,
} from '../components/sharedComponents/Typography';

const options = {
  replace: (domNode) => {
    if (domNode.attribs && domNode.name === 'p') {
      return <P>{domNode.children[0].data}</P>;
    }
    if (domNode.attribs && domNode.name === 'h1') {
      return <H1>{domNode.children[0].data}</H1>;
    }
    if (domNode.attribs && domNode.name === 'h2') {
      return <H2>{domNode.children[0].data}</H2>;
    }
    if (domNode.attribs && domNode.name === 'h3') {
      return <H3>{domNode.children[0].data}</H3>;
    }
    if (domNode.attribs && domNode.name === 'h4') {
      return <H4>{domNode.children[0].data}</H4>;
    }
  },
};

const parseHtml = (string) => {
  return parse(string, options);
};

export default parseHtml;
