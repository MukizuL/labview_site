import React from 'react';
import '../App.css';
import './ProgressBar.css';
import './Navbar.css'


function ProgressBar() {
    const[scrollProgress, setScrollProgress] = React.useState(0);

    React.useEffect(() => {
    const handleScroll = () => {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const progress = (scrollTop / (documentHeight - windowHeight - navbarHeight)) * 100;
        setScrollProgress(progress);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div className="progress-bar">
    <div className="progress-bar-fill" style={{ width: `${scrollProgress}%` }}></div>
    </div>
  );
}

export default ProgressBar;