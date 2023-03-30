import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Link } from "react-router-dom";

const porftfolioVariant = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            staggerChildren: 1,
            delay: 0.4
        }
    }
}
const porftfolioImgVariant = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            duration:1
        }
    }
}

const ImgSection3 = ({bigImgVariant, descPartsVariant, descVariant}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target:ref, offset: ["start end", "end end"]});
    const imgY = useTransform(scrollYProgress, [0.2,1], ["-30vh","80vh"]);
    const scrollImgOpacity = useTransform(scrollYProgress, [0.4,1], [1,0.03]);
    return(
        <motion.section className="third-photo" ref={ref}>
                <motion.div className="img-wrapper img3-hp-wrapper" style={{y:imgY, opacity:scrollImgOpacity}}  variants={descVariant} initial="hidden" whileInView="visible"viewport={{  once: true  }}>
                    <Link>
                        <motion.div className="img-protector img3-hp" >
                            <motion.img variants={bigImgVariant} src="https://previews.dropbox.com/p/thumb/AB1mKRHJEA8Q6CACqa_ioKYYb77SlepWVeYE87u917qTgnVPWhR7oof8YvYRJ6_TXNvFfwdE6QWCHUgzlTKMbiUBju8k6dmnHfupok6nTquegG5P-Xgd5QIODKJkCS21wgJotBdSyyAC0P-bm9MnO7bHrBBJZ_WNEOLET1vJYVrTsp6bwUUVFbxxtR-SO3VMFMLPVLruNUYnIKozg4l571o-reDuFLtci8CbCM7tTlWyI301S0NKglxqWfwjUPUSZHZ8PwKb2IIujq2nTlP6mdymU52xHsrRd45noa-UFu9rkW6akAp6ZjcK-muiypzBzAyRv1XCsdj_aUlXf1P5ai1MVwrSl2KX8fkym800VqyZQ43bYrCXFuU9BDOtuuH5Bj8/p.jpeg" />

                        </motion.div>
                    </Link>

                </motion.div>
                <motion.div className="pic-description pic-desc-3" variants={descVariant} initial="hidden" whileInView="visible">
                    <motion.h1 variants={descPartsVariant}>Photography in Japan</motion.h1>
                    <motion.p variants={descPartsVariant}>
                    Explore the beauty of Japan through my photography. From vibrant cityscapes to serene landscapes,
                    </motion.p>
                    <motion.p variants={descPartsVariant}>
                    I capture the essence and mood of each destination I visit.
                    </motion.p>
                    <motion.p variants={descPartsVariant}>
                    Join me on a journey through this unique country by clicking the link below to see my full portfolio.
                    </motion.p>

                    <Link to="/portfolio"><motion.p variants={descPartsVariant}>Check out more</motion.p></Link>


                </motion.div>
                <motion.div className="img-wrapper portfolio-showcase-wrapper3" variants={porftfolioVariant} initial="hidden" whileInView="visible"  >
               
                        <motion.div variants={ porftfolioImgVariant} className="img-protector portfolio-showcase-img-3-wrapper portfolio-showcase-img-3-wrapper-1" >
                            <motion.img className="portfolio-showcase-img-3 portfolio-showcase-img-3-1" variants={bigImgVariant}
                             src="https://previews.dropbox.com/p/thumb/AB2FNw4hl9VnOXDPc05Fj80jZza7ZAjnsuv4hAar9GACNcL7Lq7Hv8cwDFrV2-fgmeSfW0dYATC7MqXfr2Q0O_kamrjmz1B-ISlnrZ7b5iAe7Tz3PmwolbGsDTOa0ZbTzVQb39BtgbG-nxaupJCYzEBH-dN97iEn1-IlloEvx1bFZA7Af4GkaSOuq-eLDrNSml5acDsV9mJn7NAMd-M619RWQEuvo0TLESUGKjtcroB3yTcXRHE9w8hlebyuvKrEfe-KdVFyQgmVS00w00O2C-w3CdY9npspHy50jmN_IrP8cMBhSqz1LP8yS4mbviFT563eTvc1PwFYohV33o_Gta6QUVkyPfDc2rqYXw9ewSfxeLVWWfWfKQt7rkGIzRb_tjaUu01lh44CgYh2MPzVEqt3zndgqbmNDhNbAsF9saqU5jZRkYAV6aADKzcyrZROsXCvr-Qyvk_LIlbaROp3TSEAkCUYFhkyiJs_vQ3doA_E5nipPBQiXwKSHzjMAsWwAdddmAJjQLZycmqoTRVtEUfdaBA4z4ADpQCp1I3Od0uhMjPhAIT7QeyhCibbhmj92e8/p.jpeg" />
                        </motion.div>
              
                        <motion.div variants={ porftfolioImgVariant} className="img-protector portfolio-showcase-img-3-wrapper portfolio-showcase-img-3-wrapper-2" >
                            <motion.img className="portfolio-showcase-img-3 portfolio-showcase-img-3-2" variants={bigImgVariant} 
                            src="https://previews.dropbox.com/p/thumb/AB1IKog5eZwruqZ7S1d-rM1s75uhZX-tUXrKHPcKdvHosZlWorZUQVUlG9uRl-656HAkXKnCI0tZcbdawYvxFDjbpLcZPnv2xBueC-2RKdIEhQaJZjentBf5FkbjYlICdAA5JSDOiIK7GKu6dKuW1zo8uuzZ5Vn2LsJFDtYtZkLIBpKj5yUEZ-A9B-0CUxHwNBOaA2DOj4rzC6AUhB_SiCJAz2C4xL36CqZDbdkocvFBDjWpsIe4C4bQZ-fAtotOLiweAfGk3ih_2G-b0E6pQGF6JY2C4ogEOTlpvPNcwUVs_VcMWV7X_mBadCRKK4NzcXluPmxO-RF2GXf4JQBzo9oCEF9ij2dgf4dbV4v_w-auAJN22xTFxqWZo4zJFOvs7oxf4Bb7kunsjBYqGS2f61fiLl991hWDGVts7oODyLMbNBNEnPCn6QLmQePxJ_iPwhWLGqNZWdZh2SaF6LuLQthRCYd3BWjkaKjCpKBsseYn2XFcParJ0NaCyoKz4XQLR_n3wd2TPISxn3mpsYIXnEJl3Rlw7tdm_bFFUhpHy7dDkud4wRrQXWa6h8HpylLQRPGTlK29swPcb8JtmDYpxb55HbIDw7whTaVoVbzBF80oX81J72XNwc-kr58oPm9PMW4/p.jpeg" />
                        </motion.div>
                   
                        <motion.div variants={ porftfolioImgVariant} className="img-protector portfolio-showcase-img-3-wrapper portfolio-showcase-img-3-wrapper-3" >
                            <motion.img className="portfolio-showcase-img-3 portfolio-showcase-img-3-3" variants={bigImgVariant} 
                            src="https://previews.dropbox.com/p/thumb/AB3EEHI7i2cxxz81bJ5HeL2lHoruSCRkH1Q3sIoNJ-rI4js9SAL-clY1sk8v2nKzzWlkC7iEakTmhlw4uKtIVpUlUh4UH2K2R7anCEOGLgZeqhgo-a4XkkrMdg0K3KnMcf7W1XhaJgMOxFue5w6hNgHNRy7HZHNZYpiNJIbLEt0fY1x4EiNkFlSQh39Emu2OBIJ_VYAEq_yBYlvdsWLemgtsTFKEUouEVbvUp6dkGcQ2Un-sIRELx6L8B9zS_oWc-ehd-K376trRg_VjDo_cHDBknKGy7_zn4nQzCer3iLKmfIRtsM0SBJ_YbwTKCP3JGRX4csMxbIPkf7f2vdOCUzmoajxFh5RkXiUFa1SZW5VaNo2bgdxbbP1a0fCubaLekORFcuGEyKDfn1BT8aBsASNmdHidHVqhWnpI17LDIhAykQhNmoRvAwCSkKpfCkdlzNBubsas3ZMyptSpEL9aX9VsO_JK1piSGxEZuwZwTIoDYsWAFuRxl28PckRFtL7rLRU2F12dcd8uxxeY7CH68Vl9Lr6P5cV4fRkJrQt1CrU7GEG6YED67CG_RvzzBy6vKeU/p.jpeg"/>
                        </motion.div>

                </motion.div>

            </motion.section>
    )
}

export default ImgSection3;