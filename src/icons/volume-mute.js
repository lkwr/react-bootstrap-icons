import React from 'react';
import PropTypes from 'prop-types';

const VolumeMute = (props) => {
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
        d="M9.717 5.55A.5.5 0 0110 6v8a.5.5 0 01-.812.39L6.825 12.5H4.5A.5.5 0 014 12V8a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06zM9 7.04L7.312 8.39A.5.5 0 017 8.5H5v3h2a.5.5 0 01.312.11L9 12.96V7.04zm6.854.606a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708l4-4a.5.5 0 01.708 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M11.146 7.646a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708l-4-4a.5.5 0 00-.708 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumeMute.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VolumeMute.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default VolumeMute;