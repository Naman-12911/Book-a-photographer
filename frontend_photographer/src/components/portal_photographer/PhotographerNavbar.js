import React from 'react';
// import '../../css/PhotographerNavbar.css';

function PhotographerNavbar(){
    return(
        <>
        <div className='PhotoMain'>
            <header className='Mainheader'>
                <a href="#" className='logo'>logo</a>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>COntact</a></li>
                    <li><a href='#'>More</a></li>
                </ul>
            </header>

            <section className='banner'></section>
            {/* <script type="text/javascript">
                window.addEventListener("scroll", function(){
                    var header= document.querySelector("header");
                    header.classList.toggle("Sticky", window.scrollY > 0);
                })

            </script> */}

        </div>

        </>
    )
}

export default PhotographerNavbar;