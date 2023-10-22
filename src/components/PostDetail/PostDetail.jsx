import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostDetails } from '../../api';
import './PostDetail.css'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Comment from '../Comment/Comment';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPostDetails() {
      try {
        const response = await getPostDetails(id);
        setPost(response);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    }

    fetchPostDetails();
  }, [id]);

  return (
    <div className="container">
    {post ? (
      <div>
        <h2 className="title">{post.title}</h2>
        <p className="points">Points: {post.points}</p>
        <h3 className="comments-heading">Comments:</h3>
        <ul>
          {post.children && post.children.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>
    ) : (
      <>
      <FontAwesomeIcon icon={faSpinner} spinPulse/>
      <span className="loading">Loading post details...</span>
      </>
    )}
  </div>
  );
}

export default PostDetail;
