import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import ImgSection1 from "./ImgSection1";
import ImgSection2 from "./ImgSection2";
import ImgSection3 from "./ImgSection3";
import ImgSection4 from "./ImgSection4";
const mainVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 1.2
        }
    }
}
const img1WrappersVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.4
        }
    }
}
const img1Variant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 2
        }
    },
    hover:{
        opacity:0
    }
}

const bigImgVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay:0.5,
            duration: 1.2
        }
    }
}
const descVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.8,
            staggerChildren: 0.7
        }
    }
}
const descPartsVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}

const Homepage = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const { scrollYProgress } = useScroll({ target: ref1 });
    const imgY = useTransform(scrollYProgress, [0, 1], ["0vh", "70vh"]);
    const scrollImgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.article className="homepage" variants={mainVariant} initial="hidden" animate="visible" >
            <ImgSection1 img1Variant={img1Variant} img1WrappersVariant={img1WrappersVariant} descPartsVariant={descPartsVariant} descVariant={descVariant} />
            <ImgSection2 bigImgVariant={bigImgVariant} descPartsVariant={descPartsVariant} descVariant={descVariant} />
            <ImgSection3 bigImgVariant={bigImgVariant} descPartsVariant={descPartsVariant} descVariant={descVariant} />
           

        </motion.article>
    )
}

export default Homepage;