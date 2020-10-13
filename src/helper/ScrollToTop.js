import React, { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';
const ScrollToTop = () => {
    const {y:pageYOffset} = useWindowScroll();
    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        if(pageYOffset > 850) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    }, [pageYOffset])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"});

    if(!visibility) {
        return false
    }

    return (
        <div className="scrollToTop" onClick={scrollToTop}>
           <i className="icon fas fa-chevron-up"></i>
        </div>
    )
}

export default ScrollToTop
