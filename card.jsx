import React from 'react';

export default function Card({ title, author, children }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>Geschreven door {author}</p>
            {children}
        </div>
    );
}
