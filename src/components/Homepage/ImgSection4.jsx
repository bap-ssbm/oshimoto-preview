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
            staggerChildren: 1.5,
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

const ImgSection4 = ({bigImgVariant, descPartsVariant, descVariant}) => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target:ref, offset: ["start end", "end end"]});
    const imgY = useTransform(scrollYProgress, [0.2,1], ["-30vh","80vh"]);
    const scrollImgOpacity = useTransform(scrollYProgress, [0,1], [1,0.03]);
    return(
        <motion.section className="third-photo" ref={ref}>
                <motion.div className="img-wrapper img3-hp-wrapper" style={{y:imgY, opacity:scrollImgOpacity}}  variants={descVariant} initial="hidden" whileInView="visible"viewport={{  once: true  }}>
                    <Link>
                        <motion.div className="img-protector img3-hp">
                            <motion.img variants={bigImgVariant} src="https://previews.dropbox.com/p/thumb/AB0hUUbTVU74UzR0I26e2sBwRhZ76hOcrODIEoPSVzpFDkA6UTctENQouUh36BqUvd5xtuo322XHu6bQce_MxuK1GxmG95DYM_EnVoH_ucnO5PKDeGno1TGExWjNRVcEmgKHyD_tfBUeIX89_peEZbSSshBXnHJDhckFKBIMk0QElxU3wKJQTv7I4cjSxmmdxapymh3VNT8yRjjX-gWQETnXPTldHjjkueuqt4nMlFCuQAcmwraQSYuMJG8w8nXloln1FmJgvgBlfyxgNafuQdOnOTP_p7TWmk5YjjbLUdO-sVhDUzBCnEiMW71H7H-bJojxKbxAHfuxsj1NZGF3C9KxV6r9blcl9yApi9zhwymi-2v9bsaUHoqyvDTwEmOQt5H7U2ndtECdLgdiAPcR2W26tKkKBRCx71AJTCrO_Vb_WL9tslc5hzran27nR7Ymh66xSzyNC9diqiuF5BXmVUZIYL305XIT1eLPyWk8M_wk5pJjaWj5h30VPKqyiajobFgWrN9QhDgg1i03bdgSgmjja60b0ZSIXHCWUQ5qZJ8GeD3LXs2cA6jrMBImhCXHr2osKNSM-tjLrOPfhQVbaCvey6pv0oLGXepY3HKLw7c-dFq4gPzbAeprELdBX6C49UIfjQStbzO4KBQ0VxVNY8f6sY-Watk9yCx8inI4EUGSh0FJ-f5HsWtOakcTH5UBBW9FMsGnXE27j518hiwGFxCY_zhN-FkwPWMv_A5hb1GJvZCLjXJiLb4LI4IBL_YnfCyy_KBzXusQ6VM1X60M_sMh-pR5tik9MPbbjPEKyDokFQ/p.jpeg" />

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
              
                        <motion.div variants={ porftfolioImgVariant} className="img-protector img2-hp portfolio-showcase-img-3-wrapper portfolio-showcase-img-3-wrapper-2" >
                            <motion.img className="portfolio-showcase-img-3 portfolio-showcase-img-3-2" variants={bigImgVariant} 
                            src="https://previews.dropbox.com/p/thumb/AB1IKog5eZwruqZ7S1d-rM1s75uhZX-tUXrKHPcKdvHosZlWorZUQVUlG9uRl-656HAkXKnCI0tZcbdawYvxFDjbpLcZPnv2xBueC-2RKdIEhQaJZjentBf5FkbjYlICdAA5JSDOiIK7GKu6dKuW1zo8uuzZ5Vn2LsJFDtYtZkLIBpKj5yUEZ-A9B-0CUxHwNBOaA2DOj4rzC6AUhB_SiCJAz2C4xL36CqZDbdkocvFBDjWpsIe4C4bQZ-fAtotOLiweAfGk3ih_2G-b0E6pQGF6JY2C4ogEOTlpvPNcwUVs_VcMWV7X_mBadCRKK4NzcXluPmxO-RF2GXf4JQBzo9oCEF9ij2dgf4dbV4v_w-auAJN22xTFxqWZo4zJFOvs7oxf4Bb7kunsjBYqGS2f61fiLl991hWDGVts7oODyLMbNBNEnPCn6QLmQePxJ_iPwhWLGqNZWdZh2SaF6LuLQthRCYd3BWjkaKjCpKBsseYn2XFcParJ0NaCyoKz4XQLR_n3wd2TPISxn3mpsYIXnEJl3Rlw7tdm_bFFUhpHy7dDkud4wRrQXWa6h8HpylLQRPGTlK29swPcb8JtmDYpxb55HbIDw7whTaVoVbzBF80oX81J72XNwc-kr58oPm9PMW4/p.jpeg" />
                        </motion.div>
                   

                </motion.div>

            </motion.section>
    )
}

export default ImgSection4;