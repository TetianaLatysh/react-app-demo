import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './style.module.scss';

const FlexWrapper = ({
  className, children, tagName,
}) => {
  const Component = tagName;
  return (
    <Component className={classNames(
      css.flexWrapper,
      className,
    )}>
      {children}
    </Component>
  );
};

FlexWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tagName: PropTypes.string,
}

FlexWrapper.defaultProps = {
  className: '',
  children: null,
  tagName: 'div'
}

export default FlexWrapper;