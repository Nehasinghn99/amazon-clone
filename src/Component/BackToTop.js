import {useState, useEffect} from 'react'
import "./BackToTop.css";

const BackToTop = () => {
    const [isVisible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 900) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.addEventListener("scroll", toggleVisibility);
        }
    }, [])

  return (
    <div className='scroll-to-top'>
        {isVisible &&(
            <div onClick={scrollToTop} className="back-top-container">
                Back To Top
            </div>
        )}
    </div>
  )
}

export default BackToTop
