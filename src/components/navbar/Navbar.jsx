import React from 'react';

function Navbar(){
    return (
        <nav className="flex flex-row justify-between text-white p-8">
            <h1>Portfolio</h1>
            <div className="flex flex-row gap-x-8">
                <a href="https://www.linkedin.com/in/oscar-gustavsson/" target='_blank'>LinkedIn↗️</a>
                <a href="https://github.com/janoscarfilip" target='_blank'>GitHub↗️</a>
            </div>
        </nav>
    );
};

export default Navbar;