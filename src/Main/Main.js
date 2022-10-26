import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './style.module.scss';

const Main = ({
  className, children, tagName,
}) => {
  const Component = tagName;
  return (
    <Component className={classNames(
      css.main,
      className,
    )}>
      {children}
    </Component>
  );
};

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tagName: PropTypes.string,
}

Main.defaultProps = {
  className: '',
  children: null,
  tagName: 'div'
}

export default Main;