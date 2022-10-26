import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import css from './style.module.scss'

const Sidebar = ({
  className, children, tagName,
}) => {
  const Component = tagName;
  return (
    <Component className={classNames(
      css.sidebar,
      className,
    )}>
      {children}
    </Component>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tagName: PropTypes.string,
}

Sidebar.defaultProps = {
  className: '',
  children: null,
  tagName: 'div',
}

export default Sidebar;