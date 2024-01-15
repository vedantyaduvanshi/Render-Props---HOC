
import React from 'react';
import withLikeLogic from '../withlikeLogic';


function LikeImage({ likeCounter, handleLike }) {
  return (
    <div>
      <button onClick={handleLike}>Like Image {likeCounter}</button>
    </div>
  );
}

export default withLikeLogic(LikeImage);
