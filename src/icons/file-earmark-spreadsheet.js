import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileEarmarkSpreadsheet = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M5 10H3V9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2zm1 0v2h3v-2H6z"
      />
      <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
      <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
    </svg>
  );
});

FileEarmarkSpreadsheet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileEarmarkSpreadsheet.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileEarmarkSpreadsheet;
