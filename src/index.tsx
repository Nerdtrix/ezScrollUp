import React, {useEffect, useState} from 'react';

interface Iprops {
    alwaysVisible: false,
    background: "rgba(90, 92, 105, 0.5)",
    color: "white",
    behavior: "smooth"
}

function EZScrollUp ({alwaysVisible, background, color, behavior}: Iprops)
{
    const [up, setUp] = useState(false);

    const styles: object = {
        position: "fixed",
        right: "1rem",
        bottom: "1rem",
        background: background,
        zIndex: 998,
        outline: "none",
        fontSize: "25px",
        color: color,
        display: up ? "inline" : "none"
    }

    useEffect(() => {

        window.addEventListener("scroll", onScroll);

        return () => {

            window.removeEventListener("scroll", onScroll);
        }

    }, [up]);


    /*On scroll */
    const onScroll = ()=>
    {    
        if(alwaysVisible)
        {
            setUp(true);

            return;
        }

        //If the scroll height is grater than 500, show back to top button
        if(window.scrollY >= 500)
        {
            //show back to top
            setUp(true);
        }

        //if the scroll height is lower than 100, hide the button
        if(window.scrollY <= 100)
        {
            //hide back to top
            setUp(false);
        }
    }

    //Scroll to 0
    const scrollTop = () => 
    {
        window.scrollTo({
            top: 0,
            behavior: behavior
        });
    }

    return (
        <button 
            style={styles} 
            className="scrollToTop" 
            onClick={() => scrollTop()}>
            &#129145;
        </button>
    )
}

export {EZScrollUp};