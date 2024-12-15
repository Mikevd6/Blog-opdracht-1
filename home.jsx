import React from 'react';
import screenshot1 from '../assets/screenshots/screenshot1.png';

export default function Home() {
    return (
        <div>
            <h1>Welkom op de Blogventure!</h1>
            <p>Start met het verkennen van blogs, het maken van nieuwe posts en meer!</p>
            <img src={screenshot1} alt="Voorbeeld van de applicatie" className="screenshot" />
        </div>
    );
}
