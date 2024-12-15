import React, { useState } from 'react';
import Button from '../components/Button';

export default function NieuwePost() {
    const [formData, setFormData] = useState({ title: '', content: '', author: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ ...formData, created: new Date().toISOString() });
        alert('Post succesvol toegevoegd!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Titel"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
            />
            <textarea
                placeholder="Inhoud"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Auteur"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                required
            />
            <Button type="submit" text="Opslaan" />
        </form>
    );
}
