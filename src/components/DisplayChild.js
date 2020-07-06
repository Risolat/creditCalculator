import React from 'react';

const DisplayChild = ({func, text}) => {
  return(
    <span>
      {func} <small>{text}</small>
    </span>
  );
};

DisplayChild.defaultProps = {
  func: () => <p>Missing numeric value</p>,
  text: "No Value Provided"
};

// DisplayChild.propTypes ={
//   func: PropTypes.object.isRequired,
//   text: PropTypes.string.isRequired
// };

export default DisplayChild;