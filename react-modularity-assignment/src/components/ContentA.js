import React from "react";
import { Button } from './SharedComponents';

const ContentA = () => {
    const handleClick = () => {
        console.log('Button in ContentA clicked!');
    };

    return (
        <div>
            <h2>Content A</h2>
            <p>This is Dummy Content A.</p>
            <Button onClick={handleClick} text="Button in ContentA" /> {/* Use the Button component here */}
        </div>
    );
}

export { ContentA };