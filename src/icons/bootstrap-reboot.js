import React from 'react';
import PropTypes from 'prop-types';

const BootstrapReboot = (props) => {
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
        d="M3.161 10a6.84 6.84 0 106.842-6.84.58.58 0 110-1.16 8 8 0 11-6.556 3.412l-.663-.577a.58.58 0 01.227-.997l2.52-.69a.58.58 0 01.728.633l-.332 2.592a.58.58 0 01-.956.364l-.643-.56A6.812 6.812 0 003.16 10zm5.228-.079V7.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.505 1.324-1.386 1.324h-1.6zm0 3.75v-2.828h1.57l1.498 2.828h1.314l-1.646-3.006c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H7.248v7.352h1.141z"
        clipRule="evenodd"
      />
    </svg>
  );
};

BootstrapReboot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BootstrapReboot.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BootstrapReboot;