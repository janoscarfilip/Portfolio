import React from 'react';
import { Link } from "react-router-dom";

function WelcomeCard(){
    return(
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#020024] via-[#0f0e24] to-[#252525] border-2 shadow-lg rounded-lg p-6 max-w-sm text-center z-10">
            <h2 className="text-main-color text-2xl font-semibold mb-2">Welcome to my portal!</h2>
            <p className="text-main-color mb-4">
                Here you can explore my projects and learn more about me.
            </p>
            <Link to={"#Home"} className="mt-4 w-full py-2 px-4 text-main-color text-white rounded-lg border-2 hover:bg-gradient-to-br from-[#020024] via-[#0f0e24] to-[#252525] transition-colors">Enter portal!</Link>
        </div>
    );
};

export default WelcomeCard;