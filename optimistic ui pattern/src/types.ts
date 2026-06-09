type CommentStatus = 'pending' | 'confirmed' | 'failed'

export interface Comment {
    id: number
    text: string
    author: string
    timestamp: string
    status?: CommentStatus
    avatarUrl: string
}
