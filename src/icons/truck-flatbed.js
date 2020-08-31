import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TruckFlatbed = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M11.5 4a.5.5 0 0 1 .5.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-4 0 1 1 0 0 1-1-1v-1h11V4.5a.5.5 0 0 1 .5-.5zM3 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.732 0A2 2 0 0 0 12 10V6h1.02a.5.5 0 0 1 .39.188l1.48 1.85a.5.5 0 0 1 .11.313V10.5a.5.5 0 0 1-.5.5h-.768z"
      />
    </svg>
  );
});

TruckFlatbed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TruckFlatbed.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default TruckFlatbed;
