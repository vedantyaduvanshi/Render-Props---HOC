
import React from 'react';
import withLikeLogic from '../withlikeLogic';


function LikePost({ likeCounter, handleLike }) {
  return (
    <div>
      <button onClick={handleLike}>Like Post {likeCounter}</button>
    </div>
  );
}

export default withLikeLogic(LikePost);
