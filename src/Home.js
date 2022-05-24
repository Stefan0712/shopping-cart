import React, {useState} from 'react';
import './styles/home.css'


function Home(){
    const [currentImg, setCurrentImg] = useState(`images/tea${1}.jpg`)

    // const changeImg = () =>{
    //     for(let i=0;i<=2;i++){
    //         setCurrentImg();
            
    //     }
    // }
    return (
        <div className='content'>
            <div className='text'>
                <div className='descr'>
                    <h2>High quality and carefully selected tea, from all around the world, just a couple clicks away.</h2>
                </div>
                <div className='about'>
                    <h2>About</h2>
                    <p>Offering best selection of tea, and the tools necessary to prepare it, at a very convenient price is what describes us. </p>
                </div>
                <div className='reviews'>
                    <h2>Review</h2>
                    <h3>-Random person</h3>
                    <p>The quality is the best you can buy right now. Fast shipping, delicious tea and a surely not stolen logo is everything you could want from a fake tea shop.</p>
                </div>
            </div>
            <div className='images'>
                <img className='homeImg' src={currentImg} alt='tea cup'></img>
            </div>
        </div>
    )
}


export default Home;