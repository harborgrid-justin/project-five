import React from 'react';

const CommentSection = ({ comments = [] }) => { // Default value added for comments
    return (
        <section className="comment-section"> {/* Changed to semantic <section> tag */}
            <h3>Comments</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <strong>{comment.author}</strong>: {comment.text} {/* Added <strong> tag for emphasis */}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CommentSection;
