import React from 'react';
import { Link } from "react-router-dom";

function WelcomeCard(){
    return(
        <div className="bg-gradient-to-br from-[#020024] via-[#0f0e24] to-[#252525] border-2 shadow-lg rounded-lg p-6 max-w-sm text-center">
            <h2 className="text-main-color text-2xl font-semibold mb-2">Welcome to my portal!</h2>
            <p className="text-main-color mb-4">
                Here you can read more about me and see some of my projects.
            </p>
            <Link to={`Home`} className="mt-4 w-full py-2 px-4 text-main-color text-white rounded-lg border-2 hover:bg-blue-600 transition-colors">Enter portal!</Link>
        </div>
    );
};

export default WelcomeCard;