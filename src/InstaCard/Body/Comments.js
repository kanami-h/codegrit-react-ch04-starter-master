import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const Comments = ({ data }) => {
  const { commentOne, commentTwo } = data
  return (
    <ul className="comments">
      <Comment
        username={commentOne.poster}
        comment={commentOne.body} />
      <Comment
        username={commentTwo.poster}
        comment={commentTwo.body} />
    </ul>
  );
}

Comments.propTypes = {
  data: {
    commentOne: {
      poster: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    },
    commentTwo: {
      poster: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }
  } 
}

Comments.defaultProps = {
  data: {
    commentOne: {
      poster: "commenter1",
      body: "This is the insta-card"
    },
    commentTwo: {
      poster: "commenter2",
      body: "So cool!"
    }
  } 
}
export default Comments;