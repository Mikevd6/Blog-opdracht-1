import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../constants/data.json';

export default function BlogDetail() {
    const { id } = useParams();
    const post = posts.find((p) => p.id.toString() === id);

    if (!post) return <h1>Post niet gevonden!</h1>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
