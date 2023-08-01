import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// import { useLocation } from 'react-router'; 

const Additional = () => {

    const scrollToHomeHereElement = () => {
        scroll.scrollTo('here', {
          smooth: true,
          duration: 500,
        });
    };

    const scrollToHereWithDelay = () => {
        if (window.location.pathname === '/') {
          scrollToHomeHereElement();
        } else {
          setTimeout(() => {
            window.location.href = '/#here';
          }, 1000); // Change the delay time (in milliseconds) as needed
        }
      };

    return (
        <ScrollLink onClick={scrollToHereWithDelay} to="here" smooth={true} duration={500} className='link'>
            How it works ?
        </ScrollLink>
    )
}

export default Additional