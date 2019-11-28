import React from 'react';
import PropTypes from 'prop-types';

const Watch = (props) => {
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
        d="M6 16.333v-1.86A5.985 5.985 0 014 10c0-1.777.772-3.374 2-4.472V3.667C6 2.747 6.746 2 7.667 2h4.666C13.253 2 14 2.746 14 3.667v1.86A5.985 5.985 0 0116 10a5.985 5.985 0 01-2 4.472v1.861c0 .92-.746 1.667-1.667 1.667H7.667C6.747 18 6 17.254 6 16.333zM15 10a5 5 0 10-10 0 5 5 0 0010 0z"
        clipRule="evenodd"
      />
      <rect width="1" height="2" x="15.5" y="9" rx=".5" />
      <path
        fillRule="evenodd"
        d="M10 6.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H8a.5.5 0 010-1h1.5V7a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Watch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Watch.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Watch;