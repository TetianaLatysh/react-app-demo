import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './style.module.scss';

const Header = ({
  className, children, tagName,
}) => {
  const Component = tagName;
  return (
    <Component className={classNames(
      css.header,
      className,
    )}>
      {children}
    </Component>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tagName: PropTypes.string,
}

Header.defaultProps = {
  className: '',
  children: null,
  tagName: 'nav'
}

export default Header;