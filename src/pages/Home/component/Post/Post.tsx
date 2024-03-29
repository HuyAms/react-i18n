import * as React from 'react'
import PostModel from '../../../../models/Post'
import './Post.scss'

interface Props {
	post: PostModel
	onClick: (id) => void
}

const Post = (props: Props) => {
	const {post, onClick} = props

	return (
		<div className="post" key={post.id} onClick={() => onClick(post.id)}>
			<p className="post__id">id: {post.id}</p>
			<p className="post__title">title: {post.body}</p>
		</div>
	)
}

export default Post
