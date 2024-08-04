import React from 'react';

function Card(){
    return (
        <div className='flex flex-col md:flex-row justify-center gap-4'>
            <a href="https://github.com/a21oscgu/Examensarbete" target='_blank' className='text-emerald-500 border-emerald-500 border-2 rounded-md p-4 border-color'>
                Laddningstider mellan JSON och XML på nyhetssidor ↗️
            </a>
            <a href="https://github.com/janoscarfilip/" target='_blank' className='text-red-500 border-red-500 border-2 rounded-md p-4 border-color'>
                Travel ↗️
            </a>
        </div>
    );
};

export default Card;