import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, easeInOut } from "framer-motion";


const navMenu = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2
    }
  }
}
const navLinkVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2
    }
  }
}

export default function Navbar() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [showHamburgMenu, setShowMenu] = useState(false);
  return (
    <motion.nav initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="navbar">
      <div className="logo-img-wrapper">
        <img className="logo-img" src="./ryuichi oshimoto white.png" />
      </div>
      <button className="hamburger-btn" onClick={()=>{
          setShowMenu(!showHamburgMenu);
        }}>
          {showHamburgMenu?(<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                        <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FFF" fill-rule="evenodd" />
                    </svg>):(<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#FFF" fill-rule="evenodd" />
          </svg>)}
        </button>
        <AnimatePresence initial={false}>
        {(viewportWidth>980||showHamburgMenu)&&(
        <motion.div className = "nav-full-menu-wrapper" initial={viewportWidth<=980&&{x:"50vw", opacity:0}} animate={{x:'0vw', opacity:1}} exit={{x:"100vw"}} transition={{type: 'tween', ease:"easeInOut", duration:0.5}}>
          <motion.div className="nav-menu" variant={viewportWidth>980&&navMenu} initial="hidden" animate="visible">
            <h3 className="nav-portfolio-title">
              PORTFOLIO
            </h3>
            <div className="nav-drop-down">
            <motion.span className="navLink" whileHover={{scale:1.1, originX:0,textShadow:"0px 0px 8px white"}}>
              <Link to="/">
                <motion.span initial={viewportWidth>980&&{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>Portraits</motion.span>
                </Link>
              </motion.span>
              <motion.span className="navLink" whileHover={{scale:1.1, originX:0,textShadow:"0px 0px 8px white"}}><Link  to="/"><motion.span initial={viewportWidth>980&&{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>US-Travel</motion.span></Link></motion.span>
              <motion.span className="navLink" whileHover={{scale:1.1, originX:0,textShadow:"0px 0px 8px white"}}><Link  to="/"><motion.span initial={viewportWidth>980&&{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>JP-Travel</motion.span></Link></motion.span>
            </div>


            <motion.span className="navLink" whileHover={{scale:1.1, originX:0,textShadow:"0px 0px 8px white"}}><Link  to="/about"><motion.span initial={viewportWidth>980&&{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>About</motion.span></Link></motion.span>
            <motion.span className="navLink" whileHover={{scale:1.1, originX:0,textShadow:"0px 0px 8px white"}}><Link  to="/"><motion.span initial={viewportWidth>980&&{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }}>Blog</motion.span></Link></motion.span>
            <motion.span className="navLink" whileHover={{scale:1.1, originX:0,textShadow:"0px 0px 8px white"}}><Link  to="/"><motion.span initial={viewportWidth>980&&{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>Contact</motion.span></Link></motion.span>

          </motion.div>
          <motion.div className="social-icon-wrappers" initial={viewportWidth>980&&{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.4 }} >
            <a class="nav-link  social-icon" aria-current="page" href="#"><i class="fa-brands fa-twitter"></i></a>


            <a class="nav-link social-icon" href="#"><i class="fa-brands fa-facebook-f"></i></a>


            <a class="nav-link social-icon" href="https://www.instagram.com/ryuichi_oshimoto_official"><i
              class="fa-brands fa-instagram"></i></a>


            <a class="nav-link social-icon" href="https://www.youtube.com/@2865RO"><i class="fa-brands fa-youtube"></i></a>

            <a class="nav-link social-icon"
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ryuoshimoto@gmail.com"><i
                class="fa-solid fa-envelope" aria-hidden="true"></i></a>
          </motion.div>
        </motion.div>
        )}

</AnimatePresence>
    </motion.nav>
  );
}
