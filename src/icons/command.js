import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Command = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M3.5 2a1.5 1.5 0 1 0 0 3H5V3.5A1.5 1.5 0 0 0 3.5 2zM6 5V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5H6zm4 1H6v4h4V6zm1-1h1.5A1.5 1.5 0 1 0 11 3.5V5zm0 6v1.5a1.5 1.5 0 1 0 1.5-1.5H11zm-6 0H3.5A1.5 1.5 0 1 0 5 12.5V11z"
      />
    </svg>
  );
});

Command.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Command.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Command;
