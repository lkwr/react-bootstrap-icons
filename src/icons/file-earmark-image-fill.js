import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileEarmarkImageFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M4 0a2 2 0 0 0-2 2v10.293l2.87-2.87a1 1 0 0 1 1.222-.15l1.77 1.06L9.75 7.69a1 1 0 0 1 1.52-.126L14 10.293V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0H4zM2 14v-.293l3.578-3.577 2.165 1.299.396.237.268-.375 2.157-3.02L14 11.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM9.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
      />
    </svg>
  );
});

FileEarmarkImageFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileEarmarkImageFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default FileEarmarkImageFill;
