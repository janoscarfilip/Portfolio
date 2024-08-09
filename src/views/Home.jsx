import Navbar from '../components/navbar/Navbar';
import Card1 from '../components/card/Card1';
import Card2 from '../components/card/Card2';
import Card3 from '../components/card/Card3';
import Card4 from '../components/card/Card4';

export default function Home() {
    return (
        <>
            <div id="home" className='relative min-h-screen bg-gradient-to-br from-[#020024] via-[#0f0e24] to-[#252525]'>
                <Navbar/>
                <div className='flex flex-col gap-16 p-4 items-center'>
                    <Card1/>
                    <Card2/>
                    <Card3/>
                    <Card4/>
                </div>
            </div>
        </>
    );
}