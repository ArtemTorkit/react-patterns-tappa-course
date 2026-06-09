import React, { startTransition } from 'react'
import AddComment from './AddComment'
import CommentList from './CommentList'
import type { Comment } from '../types'

const INITIAL_COMMENTS: Comment[] = [
  { id: 1, text: 'This is the first comment', author: 'Alice', timestamp: '2024-06-01T12:00:00Z', status: 'confirmed', avatarUrl: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, text: 'This is the second comment', author: 'Bob', timestamp: '2024-06-01T13:00:00Z', status: 'confirmed', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, text: 'This is the third comment', author: 'Charlie', timestamp: '2024-06-01T14:00:00Z', status: 'pending', avatarUrl: 'https://i.pravatar.cc/150?img=3' }
]

const CommmentContainer = () => {
  const [comments, setComments] = React.useState(INITIAL_COMMENTS)
  const [commentsOptimistic, addCommentOptimistically] = React.useOptimistic<Comment[], Comment>(comments, (currentComments: Comment[], newComment: Comment) => [...currentComments, { ...newComment, status: 'pending' }])

  const handleAddComment = async (newComment: Comment) => {
    addCommentOptimistically({ ...newComment, status: 'pending' });

    try {
        // Simulate API call
        await new Promise((resolve)=> setTimeout(resolve, 1000));

        setComments(prev => [...prev, { ...newComment, status: 'confirmed' }]);
    } catch (error) {
        console.error('Failed to add comment:', error);
        setComments(prev => [...prev, {...newComment, status: 'failed'}]);
    }
  }

  return (
    <div>
      <AddComment onAddComment={(newComment: Comment) => startTransition( async () => handleAddComment(newComment))} />
      <CommentList comments={commentsOptimistic} />
    </div>
  )
}

export default CommmentContainer