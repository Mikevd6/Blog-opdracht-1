import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import posts from '../constants/data.json';
import screenshotMenu from '../assets/screenshots/screenshot-menu-balk.png';

export default function Overzicht() {
    return (
        <div>
            <h1>Alle Blogs</h1>
            {posts.map((post) => (
                <Card key={post.id} title={post.title} author={post.author}>
                    <Link to={`/posts/${post.id}`}>Lees meer</Link>
                </Card>
            ))}
            <img src={screenshotMenu} alt="Menu voorbeeld" className="screenshot" />
        </div>
    );
}
