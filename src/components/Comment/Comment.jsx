import React from 'react';
import './Comment.css';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="comment-header">
        <span className="user-icon">
        <FontAwesomeIcon icon={faCircleUser} />
        </span>
        <span className="author">{comment.author}</span>
      </div>
      <p dangerouslySetInnerHTML={{ __html: comment.text }}></p>
      <div className="children">
        {comment.children.map((child) => (
          <Comment key={child.id} comment={child} />
        ))}
      </div>
    </div>
  );
}

export default Comment;
