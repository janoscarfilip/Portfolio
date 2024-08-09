import Navbar from '../components/navbar/Navbar';
import Card from '../components/card/Card';

export default function Home() {
    return (
        <>
            <div id="home" className='relative min-h-screen bg-gradient-to-br from-[#020024] via-[#0f0e24] to-[#252525]'>
                <Navbar/>
                <div className='flex flex-col gap-16 p-4 items-center'>
                    <Card/>
                </div>
            </div>
        </>
    );
}