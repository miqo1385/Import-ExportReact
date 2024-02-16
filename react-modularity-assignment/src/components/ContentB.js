import React from "react";

import { Button } from './SharedComponents'; // Import the Button component from SharedComponents

const ContentB = () => {
    const handleClick = () => {
        console.log('Button in ContentB clicked!');
    };

    return (
        <div>
            <h2>Content B</h2>
            <p>This is Content B.</p>
            <Button onClick={handleClick} text="Button in ContentB" /> {/* Use the Button component here */}
        </div>
    );
}

export { ContentB };