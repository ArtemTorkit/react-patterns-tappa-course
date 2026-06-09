import type { Comment } from '../types'

const CommentList = ({comments}: {comments: Comment[]}) => {

  return (
    <div>
        {comments.map(comment => (
            <div key={comment.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px', opacity: comment.status === 'pending' ? 0.5 : 1 }}>
                <img src={comment.avatarUrl} alt={`${comment.author}'s avatar`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                <div>
                    <p>{comment.text}</p>
                    <p>{comment.author}</p>
                    <p>{comment.timestamp}</p>
                </div>
                {comment.status === 'failed' && (
                    <p style={{ color: 'red' }}>Failed to add comment</p>
                )}
            </div>
        ))}
    </div>
  )
}

export default CommentList