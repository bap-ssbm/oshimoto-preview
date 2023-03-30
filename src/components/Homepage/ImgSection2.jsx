import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Link } from "react-router-dom";

const ImgSection2 = ({bigImgVariant, descPartsVariant, descVariant}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target:ref, offset: ["start center", "end end"]});
    const imgY = useTransform(scrollYProgress, [0.2,0.5], ["-30vh","0vh"]);
    const scrollImgOpacity = useTransform(scrollYProgress, [0.3,0.5], [1,0.03]);
    const imgY2 = useTransform(scrollYProgress, [0.5,1], ["-10vh","20vh"]);
    const scrollImgOpacity2 = useTransform(scrollYProgress, [0.5,1], [1,0]);
    return(
        <motion.section className="second-photo" ref={ref}>
                <motion.div className="img-wrapper img2-hp-wrapper"  style={{y:imgY, opacity:scrollImgOpacity}} variants={descVariant} initial="hidden" whileInView="visible" viewport={{  once: true  }} >
                    <Link>
                        <motion.div className="img-protector img2-hp" >
                            <motion.img variants={bigImgVariant} src="https://previews.dropbox.com/p/thumb/AB2qFM0_xUm0bseAJ8kpr4tzGmyjdEhoxKYwisibu-U11V97kJYhE2RRtRQ41JfvovQhGXpbGFKydx9jDZkEpjlg-VKQsSzolPP6NcUPrQ-AIwn7Sc2g56niC26uv04ZPLpvDJJpP2KFx7hnEQS2Lp3q0A6u9jZP7OBpNHAaJoX_Q6W0-GQRWpyzAXstKgu3AROxOvdM_ZVRnD73-6nav8iT131yarkBCIzqaR-DDVfmsbI1IeqSvvTuyhbEiPUSd99zBJO0VATMLFBx5dJyN5DYtgTHSDR20Ij7uWqZRun-2I2U1sRiodPk83dHzAWd1rglM9vKxscjpOy6k1kgsKETKyweI0vj9YNp916Ffr2uIMVP5b5k3NWMw_l9LJTgBb8/p.jpeg" />
                        </motion.div>
                    </Link>

                </motion.div>
                <motion.div className="pic-description pic-desc-2" variants={descVariant} initial="hidden" whileInView="visible">
                    <motion.h1 variants={descPartsVariant}>Photography taken in America and Canada</motion.h1>
                    <motion.p variants={descPartsVariant}>
                        Welcome to my photography portfolio showcasing the beauty of America's diverse landscapes and cityscapes.
                    </motion.p>
                    <motion.p variants={descPartsVariant}>
                        Join me on a journey through the United States as I capture the essence and emotions of each unique
                        destination.
                    </motion.p>
                    <motion.p variants={descPartsVariant}>
                        Come discover the breathtaking scenery that awaits.
                    </motion.p>

                    <Link to="/portfolio"><motion.p variants={descPartsVariant}>Check out more</motion.p></Link>


                </motion.div>
                <motion.div className="img-wrapper img2-hp-wrapper"  style={{y:imgY2, opacity:scrollImgOpacity2}} variants={descVariant} initial="hidden" whileInView="visible" viewport={{  once: true  }} >
                    <Link>
                        <motion.div className="img-protector img2-hp" >
                            <motion.img variants={bigImgVariant} src="https://uc22e38e358251777d2a42212fa5.previews.dropboxusercontent.com/p/thumb/AB0DgFw5S5C0d1UBQd2k14FMl4UwgXMAVlo3YUcCS7OSRxIQuogeO7yyEmO4xT9WwMJQRyCN1hKI75p22UZCov3UDPx-INpHAkNh-_Vv-JoYQr7TQnR2H-BJYxkO3q7nMAoP7Hv-IlM47zvLfEW-EyYtRskgx3m7P-Fgmb4h6jyrIXszFezfzTFnRj0Taefj38LTXefVMrs1UfEz2upArbtDrsKvucAL-xjlvMVhDztafewNuI3d4Rkoe0gzT_GA4k_9T17RWk-Jvhrvj7fehXEywJLIxXLf52T_p4axzE6GgXoDOA-Wmdd7HacfJoWc1JLVc_C12VEaQb_IZiRqm3LFDAJE7_TksrtwSOo43WJ23nkbk8gZ64Doc-1cp4uyww0/p.jpeg" />
                        </motion.div>
                    </Link>

                </motion.div>
                

            </motion.section>
    )
}

export default ImgSection2;