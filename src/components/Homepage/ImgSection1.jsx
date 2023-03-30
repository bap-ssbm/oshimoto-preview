import { useRef, useState } from "react";
import { useScroll, useTransform, motion, easeInOut } from "framer-motion";
import { Link } from "react-router-dom";


const porftfolioVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 1,
            delay: 0.3
        }
    }
}
const porftfolioImgVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }

}

const ImgSection1 = ({ img1Variant, img1WrappersVariant, descPartsVariant, descVariant }) => {
    const ref1 = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref1, offset: ["start end", "end end"] });
    const imgY = useTransform(scrollYProgress, [0.65, 1], ["0vh", "80vh"]);
    const scrollImgOpacity = useTransform(scrollYProgress, [0.65, 1], [1, 0.03]);

    const [isHoveringImg1, setIsHoveringImg1] = useState(false);

    return (
        <motion.section className="first-photo" ref={ref1}>
            <motion.div className="img-wrapper img1-hp-wrapper" viewport={{ once: true }} variants={descVariant} initial="hidden" whileInView="visible">
                <Link>
                    <motion.div className="img-protector img1-hp" >
                        <motion.div variants={img1WrappersVariant} initial="hidden" whileInView="visible" >
                            <motion.div className="img1-wrapper" whileHover={{ opacity: 0 }} transition={{ ease: "easeInOut", duration: 0.4 }}>
                                <motion.img variants={img1Variant} src="https://ucd25af89a3a9cdb87c4832d88df.previews.dropboxusercontent.com/p/thumb/AB0DqYTcTCUuXWdGLtA_Zezu3ktxWDviKc8L3_iGeIlUck1UkTbqiUdDXg_-2sHE23SoCHWW_emIcqnp1gEAvCn1iD7Ma3LacFjPRyQ4cnuQqqC3ozXhW3jDABOv0P2TAXKbcd9pnhJoag_c2k-h5Ir4zETb0R0eoJKi9wuVnIIJBUYfOpGYRNIv4IWb30ys6FPkHjBhMKqEksZ2NdlwHn27p3u9X5HbQMfy3VrUPbih4vCWZugHc1w77416Eu_UV6dYXVpnBRJEsHo2qcN1BPhrjKrZ_cDJ0nTZF4AT_JqSmjUFNDs9m3H1ECkUOM9JTic1jNneO31zeU8VXyxKDnA4p4RaB9gWhvzpYfG3ctucOr9C7CISSEXOZtA3uX1ZC7sZot9M3srQQzQmHSwvf9p5/p.jpeg" />
                            </motion.div>
                            <motion.div className="img1-wrapper" whileHover={{ opacity: 0 }} transition={{ ease: "easeInOut", duration: 0.4 }}>
                                <motion.img variants={img1Variant} src="https://ucd25af89a3a9cdb87c4832d88df.previews.dropboxusercontent.com/p/thumb/AB0DqYTcTCUuXWdGLtA_Zezu3ktxWDviKc8L3_iGeIlUck1UkTbqiUdDXg_-2sHE23SoCHWW_emIcqnp1gEAvCn1iD7Ma3LacFjPRyQ4cnuQqqC3ozXhW3jDABOv0P2TAXKbcd9pnhJoag_c2k-h5Ir4zETb0R0eoJKi9wuVnIIJBUYfOpGYRNIv4IWb30ys6FPkHjBhMKqEksZ2NdlwHn27p3u9X5HbQMfy3VrUPbih4vCWZugHc1w77416Eu_UV6dYXVpnBRJEsHo2qcN1BPhrjKrZ_cDJ0nTZF4AT_JqSmjUFNDs9m3H1ECkUOM9JTic1jNneO31zeU8VXyxKDnA4p4RaB9gWhvzpYfG3ctucOr9C7CISSEXOZtA3uX1ZC7sZot9M3srQQzQmHSwvf9p5/p.jpeg" />
                            </motion.div>
                            <motion.div className="img1-wrapper" whileHover={{ opacity: 0 }} transition={{ ease: "easeInOut", duration: 0.4 }}>
                                <motion.img variants={img1Variant} src="https://ucd25af89a3a9cdb87c4832d88df.previews.dropboxusercontent.com/p/thumb/AB0DqYTcTCUuXWdGLtA_Zezu3ktxWDviKc8L3_iGeIlUck1UkTbqiUdDXg_-2sHE23SoCHWW_emIcqnp1gEAvCn1iD7Ma3LacFjPRyQ4cnuQqqC3ozXhW3jDABOv0P2TAXKbcd9pnhJoag_c2k-h5Ir4zETb0R0eoJKi9wuVnIIJBUYfOpGYRNIv4IWb30ys6FPkHjBhMKqEksZ2NdlwHn27p3u9X5HbQMfy3VrUPbih4vCWZugHc1w77416Eu_UV6dYXVpnBRJEsHo2qcN1BPhrjKrZ_cDJ0nTZF4AT_JqSmjUFNDs9m3H1ECkUOM9JTic1jNneO31zeU8VXyxKDnA4p4RaB9gWhvzpYfG3ctucOr9C7CISSEXOZtA3uX1ZC7sZot9M3srQQzQmHSwvf9p5/p.jpeg" />
                            </motion.div>


                        </motion.div>
                        <motion.div variants={img1WrappersVariant} initial="hidden" whileInView="visible" >
                            <motion.div className="img1-wrapper" whileHover={{ opacity: 0 }} transition={{ ease: "easeInOut", duration: 0.4 }}>
                                <motion.img variants={img1Variant} src="https://ucd25af89a3a9cdb87c4832d88df.previews.dropboxusercontent.com/p/thumb/AB0DqYTcTCUuXWdGLtA_Zezu3ktxWDviKc8L3_iGeIlUck1UkTbqiUdDXg_-2sHE23SoCHWW_emIcqnp1gEAvCn1iD7Ma3LacFjPRyQ4cnuQqqC3ozXhW3jDABOv0P2TAXKbcd9pnhJoag_c2k-h5Ir4zETb0R0eoJKi9wuVnIIJBUYfOpGYRNIv4IWb30ys6FPkHjBhMKqEksZ2NdlwHn27p3u9X5HbQMfy3VrUPbih4vCWZugHc1w77416Eu_UV6dYXVpnBRJEsHo2qcN1BPhrjKrZ_cDJ0nTZF4AT_JqSmjUFNDs9m3H1ECkUOM9JTic1jNneO31zeU8VXyxKDnA4p4RaB9gWhvzpYfG3ctucOr9C7CISSEXOZtA3uX1ZC7sZot9M3srQQzQmHSwvf9p5/p.jpeg" />
                            </motion.div>
                            <motion.div className="img1-wrapper" whileHover={{ opacity: 0 }} transition={{ ease: "easeInOut", duration: 0.4 }}>
                                <motion.img variants={img1Variant} src="https://ucd25af89a3a9cdb87c4832d88df.previews.dropboxusercontent.com/p/thumb/AB0DqYTcTCUuXWdGLtA_Zezu3ktxWDviKc8L3_iGeIlUck1UkTbqiUdDXg_-2sHE23SoCHWW_emIcqnp1gEAvCn1iD7Ma3LacFjPRyQ4cnuQqqC3ozXhW3jDABOv0P2TAXKbcd9pnhJoag_c2k-h5Ir4zETb0R0eoJKi9wuVnIIJBUYfOpGYRNIv4IWb30ys6FPkHjBhMKqEksZ2NdlwHn27p3u9X5HbQMfy3VrUPbih4vCWZugHc1w77416Eu_UV6dYXVpnBRJEsHo2qcN1BPhrjKrZ_cDJ0nTZF4AT_JqSmjUFNDs9m3H1ECkUOM9JTic1jNneO31zeU8VXyxKDnA4p4RaB9gWhvzpYfG3ctucOr9C7CISSEXOZtA3uX1ZC7sZot9M3srQQzQmHSwvf9p5/p.jpeg" />
                            </motion.div>
                            <motion.div className="img1-wrapper" whileHover={{ opacity: 0 }} transition={{ ease: "easeInOut", duration: 0.4 }}>
                                <motion.img variants={img1Variant} src="https://ucd25af89a3a9cdb87c4832d88df.previews.dropboxusercontent.com/p/thumb/AB0DqYTcTCUuXWdGLtA_Zezu3ktxWDviKc8L3_iGeIlUck1UkTbqiUdDXg_-2sHE23SoCHWW_emIcqnp1gEAvCn1iD7Ma3LacFjPRyQ4cnuQqqC3ozXhW3jDABOv0P2TAXKbcd9pnhJoag_c2k-h5Ir4zETb0R0eoJKi9wuVnIIJBUYfOpGYRNIv4IWb30ys6FPkHjBhMKqEksZ2NdlwHn27p3u9X5HbQMfy3VrUPbih4vCWZugHc1w77416Eu_UV6dYXVpnBRJEsHo2qcN1BPhrjKrZ_cDJ0nTZF4AT_JqSmjUFNDs9m3H1ECkUOM9JTic1jNneO31zeU8VXyxKDnA4p4RaB9gWhvzpYfG3ctucOr9C7CISSEXOZtA3uX1ZC7sZot9M3srQQzQmHSwvf9p5/p.jpeg" />
                            </motion.div>
                        </motion.div>

                    </motion.div>
                </Link>

            </motion.div>
            <motion.div className="img-wrapper img1-2-hp-wrapper">
                <motion.div style={{ y: imgY, opacity: scrollImgOpacity }} className="allegeria-img1-wrapper-wrapper" >
                    {isHoveringImg1&&(<div className="hoverTxt1"><h3>Alegría</h3><p>Cirque du Soleil</p></div>)}
                    <motion.div  onMouseOver={() => { setIsHoveringImg1(true); }} onMouseOut={() => { setIsHoveringImg1(false); }} whileHover={{ opacity: 0.2 }} className="allegeria-img1-wrapper"  >

                        <img className="allegeria-img1" src="https://previews.dropbox.com/p/thumb/AB0K2yeOVqKK2nnL0iYiMcl5U1z36DkIz6rBeH3Pe_dk7LvyvSdL0IC23s2Qgvipttzg6rZLNDomH-Ae0gvJgVAP8_5n6SQ5nR_hBhiCjyKjnYnQQr1CDeLd-iAAVUj6Xsa3H3FpQ6U-eiNOAkK1qcwGye0nSnmgFN7JF0vrjY_sndsDksji1_8HJWG0dOv4kElINNy1_zOANIiTd6bqYLTPVnwPNuDZ9L_r8zeY2MTR7Zjo8NZ--0wKficvVeZZr8EkjnDtspKeqXXUI8-FCcFyTjic2RcsU4oMLeWR01bdRHEkbvUXkNXYo0bmlHiuDpwJay2Dx9kI3rCgf5N0XPDsWVh1EO1Uujozd65vqRUH3Qiz3AK3nj1hGO3bUtY-1iGYF-WikZHH0-cpu7NnriR8geTE28Eqa4FUjujognA9EXty3VmSIZ43ZQ_7us8EYJQib-aBRpAI-A14_AamNP7P6SSp1zy97iHpVunCzjSO4dF9hTnCsc9UZlYd4ApFZCJLF8HT0r1rM6V9QWRq30neyAHe1Zb3S2R5lwzAN_nM6xs1zNd5fMtrnhohhawCXH4heN75zFEDrm0a2iQxPEgC1TBSgkJy_YL3aGE4hMNq5eNxyVVQnihA26Ph73F17ReUperha5KWhyyen_RsNTtbvbrAihFFB-zZHiynct_zjrMooTRWKFNf9LT6y5vaCE9Ci6fRrkuch0-icrFzTUkS0bcpcvWQGyyj1aj5D9dTuCM1D6GYk_dqlvPUmIv91n_Hf6sGAuZTVmEF9xLWbrWmhFmLXzueMA36rmArHt6_7w/p.jpeg" />
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div className="pic-description pic-desc-1" >
                <motion.div className="pic-desc-wrapper pic-desc-wrapper1" variants={descVariant} initial="hidden" whileInView="visible">
                    <motion.h1 variants={descPartsVariant}>PORTRAITS</motion.h1>
                    <motion.p variants={descPartsVariant}>
                        Introducing my passion for capturing the essence of people and portraits through photography.
                    </motion.p>
                    <motion.p variants={descPartsVariant}>
                        As a professional, I create captivating and timeless images that tell a story, whether it's a candid moment or a carefully curated scene.
                    </motion.p>
                    <motion.p variants={descPartsVariant}>
                        Discover more of my work and photography services by clicking the link below.
                    </motion.p>

                    <Link to="/portfolio"><motion.p variants={descPartsVariant}>Check out more</motion.p></Link>
                </motion.div>

                <motion.div className="portfolio-showcase1" viewport={{ once: true }} variants={porftfolioVariant} initial="hidden" whileInView="visible" >
                    <motion.div variants={porftfolioImgVariant} viewport={{ once: true }} className="img-wrapper-portfolio-showcase1">
                        <div className="porfolio-img-protector1">
                            <img className="portrait-showcase-img1" src="https://previews.dropbox.com/p/thumb/AB0crEBPwEy8fvoO1zbCuu1wiqTBubkIX_uW2IOg5_7-q0F-mxWHwMNvg3vCkekLPU7KAAHjbA9DoA_bcSyf1hfXa69DX2X7vELaxB2Sv5A4A94ce0px4bvZMQpNU62_HbYy0Q_Dn9K3_u2WiDdElN7gvoM0DX6zI5ztfe03bXO-MoCa-uQVsm-KxN8LM3NosxM_rZQyYKhBOxUXvgigIerbgXiZtiHqHKRohBvT8y5-q9Ui4c2yMoTScZ27kcDCytf3ghd3HtBXzb27fUvAp1AnoBLiqvGl4KttG8AjEZVrIYJ3w_Jl3VrbFOsO2Ap6oxrnOAMojqA87-fkTLDYbMCalJKUXIhQkYpc9JiaBpg9I67VXM3USn25DoWPAtrSoHo/p.jpeg" />
                        </div>
                    </motion.div>
                    <motion.div variants={porftfolioImgVariant}  viewport={{ once: true }}className="img-wrapper-portfolio-showcase1">
                        <div className="porfolio-img-protector1">
                            <img className="portrait-showcase-img1" src="https://previews.dropbox.com/p/thumb/AB1XGs0i-2l8Yyfw9PHkyYReTbECNXWHR6hiLb2H1Ymj0SRilWaxm4mf5NqWq0alTJFGX4xS3n1cMa5O6_CEsr2Z7vubzoRHGr0QhvTLsl_29sA1D5NB3n01Pp9PcfrvE4KV-sxEsorQkO-WYP06HC5UCWZLadAWCBQ1cZf4Ug7lZa3JvVSeVtwOGf6NZvkfQ6L5hGcazvpgV8uD6Mo5OLNKK6rs5XXuMhf__xBiyCDJeSNyunosr3JX5XjmYkhLF0Wo-3KH6Gc1sid5-Iq-iaSvWfcPC5tOFacyeg1J0Q9OpzAR3x7RWnPra0IYhJfJWQEBTS0k2dDPMoceJm77LtRyVSuth6JYYkWJTfd40utgmbL3hHfBbLPpwuxtuokyPy2B1SSPNUFf1PEas0jgJ3dp-Z-EsVwDhmrlphZzMe8vyG7WbrmD1G7c_UpplYv6mmJXA3JVMVIFTSsZ0xvawrbAj9nvluhu1Wb0fOmsis4Zcsps208XuqjeJ_Gyr6sXYPY/p.jpeg" />
                        </div>
                    </motion.div>
                    <motion.div variants={porftfolioImgVariant}  viewport={{ once: true }}className="img-wrapper-portfolio-showcase1">
                        <div className="porfolio-img-protector1">
                            <img className="portrait-showcase-img1" src="https://previews.dropbox.com/p/thumb/AB3Y0_WzMxhoL0NVdZUzYpzN46ea9D53Iv88XHdsZEeKsFITQ8v6lVNs3TCCm7wLoTSNRJCqplL8FSwjMimnLFiYhfJA7q3pCyDrYIEI67TL_KTcDyjBaENB9aAYSiyv6H6QOOCflUIz6hn4zfeBWIDsL-RkKamXlDh8mlWjurLrTOUbkizJW7SJj44ZrflegzbC6dUn6tKSEXtks49v4LIC9LoU4Sa3hOZeDk_xtqqz7O_3Hprrz3e4Leb32hfpi9YEqkkDFR_cor5goQt1Op9xmntw4W3MiANIuX83ZtxlloCXUTi9N6xayG3tPfZBycX4uueqsVS3Az70DOnXWrnf1wo9d4c4nhcMXwW5sM8CAZkzfqQ25wxI1UD0Sga8jbg/p.jpeg" />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

        </motion.section>
    )
}

export default ImgSection1;