import React from 'react';
import Comment from './Comment';

const Comments = ({ data }) => (
  <ul className="comments">
    <Comment
      username={
        id === 1 ? cardDataOne : cardDataTwo
      }
      comment={} />
    <Comment
      username="testuser2"
      comment="So cool!" />
  </ul>
);

export default Comments;