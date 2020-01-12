import React from 'react';
import PropTypes from 'prop-types';
import '.././assets/scss/loader.scss';

const Loader = (props) => {
  const { customClass } = props;

  return (
    <div className={`wm-sending ${customClass}`}>
      <svg id="wm-loading" x="0px" y="0px" viewBox="0 0 150 150">
        <circle id="loading-inner" cx="75" cy="75" r="60" />
      </svg>
    </div>
  );
};

Loader.defaultProps = {
  customClass: ''
};

Loader.propTypes = {
  customClass: PropTypes.string
};

export default Loader;
