
import React, { useState } from 'react';

const withLikeLogic = (WrappedComponent) => {
  return function WithLikeLogic(props) {
    const [likeCounter, setLikeCounter] = useState(0);

    const handleLike = () => {
      setLikeCounter(likeCounter + 1);
    };

    return <WrappedComponent {...props} likeCounter={likeCounter} handleLike={handleLike} />;
  };
};

export default withLikeLogic;
