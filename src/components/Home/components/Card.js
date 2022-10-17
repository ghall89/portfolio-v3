import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { P, H4 } from '../../sharedComponents/Typography';

const Card = ({ title, children, icon }) => (
  <div className="m-2 p-4 border rounded-md dark:border-slate-500">
    <H4 className="text-center pb-4 border-b dark:border-slate-500">
      {icon ? <FontAwesomeIcon className="mr-3" icon={icon} /> : null}
      {title}
    </H4>
    {children}
  </div>
);

export default Card;
