import type { Comment } from '../types'

const AddComment = ({ onAddComment }: { onAddComment: (newComment: Comment) => void }) => {
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const newComment = {
            id: Date.now(),
            text: formData.get('comment') as string,
            author: 'Me',
            timestamp: new Date().toISOString(),
            avatarUrl: 'https://i.pravatar.cc/150?img=4'
        };
        onAddComment(newComment);
    }}>
        <input type="text" name="comment" placeholder="Add a comment" required />
        <button type="submit">Submit</button>
    </form>
  )
}

export default AddComment