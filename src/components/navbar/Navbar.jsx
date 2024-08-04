import React from 'react';

function Navbar(){
    return (
        <nav className="flex flex-row justify-between text-white p-8">
            <p className="text-xl">Portfolio</p>
            <div className="flex flex-row gap-x-8 text-xl">
                <a href="https://www.linkedin.com/in/oscar-gustavsson/" target='_blank'>LinkedIn ↗️</a>
                <a href="https://github.com/janoscarfilip" className='flex' target='_blank'><img src="/github-mark-white.png" className='w-10' alt="Github white logo."/><p>GitHub ↗️</p></a>
            </div>
        </nav>
    );
};

export default Navbar;