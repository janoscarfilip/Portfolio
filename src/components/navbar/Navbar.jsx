import React from 'react';
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="flex flex-row justify-between p-8">
            <Link className="text-main-color text-xl" to={`/`}>Portfolio</Link>
            <div className="text-main-color flex flex-row items-center gap-x-8 text-xl">
                <a href="https://www.linkedin.com/in/oscar-gustavsson/" target='_blank'>LinkedIn ↗️</a>
                <a href="https://github.com/janoscarfilip" className='flex items-center gap-x-2' target='_blank'><img src="/src/assets/github-mark-white.png" className='w-10' alt="Github white logo."/><p>GitHub ↗️</p></a>
            </div>
        </nav>
    );
};

export default Navbar;