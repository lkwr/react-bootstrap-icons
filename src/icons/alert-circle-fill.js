import React from 'react';
import PropTypes from 'prop-types';

const AlertCircleFill = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8.998 3a1 1 0 112 0 1 1 0 01-2 0zM10 6a.905.905 0 00-.9.995l.35 3.507a.553.553 0 001.1 0l.35-3.507A.905.905 0 0010 6z"
        clipRule="evenodd"
      />
    </svg>
  );
};

AlertCircleFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AlertCircleFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default AlertCircleFill;