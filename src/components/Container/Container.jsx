import s from './Container.module.css';
import PropTypes from 'prop-types';

export default function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
