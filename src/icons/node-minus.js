import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const NodeMinus = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M11 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6.025 7.5a5 5 0 1 1 0 1H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5h2.025zM1.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM8 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 8 8z"
      />
    </svg>
  );
});

NodeMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

NodeMinus.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default NodeMinus;
