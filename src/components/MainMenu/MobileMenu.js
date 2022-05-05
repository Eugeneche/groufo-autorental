import * as React from "react"
import * as styles from "./_MainMenu.module.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import menu from "../../images/icons/hamb-menu.svg"
import phone from "../../images/icons/phone.svg"

const MobileMenu = () => {
    return (
        <>
            <div className={styles.mainMenu}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link to="/">
                            <StaticImage
                                src="../../images/groufo_logo_yellow_white.svg"
                                formats={["auto", "webp", "avif"]}
                                alt="A Groufo logo"
                                style={{  }}
                            />
                        </Link>
                    </div>
                    <div className={styles.phone}>
                        <a href="tel:+420736195020"><img src={phone}></img><span>736 195 020</span></a>
                    </div>
                    <div className={styles.hamburger}>
                        <img src={menu}></img>
                    </div>
                </div>
            </div>
            <div className={styles.mobileMenuShadow}>
                <div className={styles.mobileMenu}>

                </div>
            </div>
        </>
    )
}

export default MobileMenu

/* 
                    <div className={styles.pages}>
                        <ul>
                            <li>
                                <Link to="/cars">Auta&nbsp;<span style={{display: "inline-block", color: "grey",  transform: "rotate(90deg)", top: "7px"}}>&#10095;</span></Link>
                            </li>
                            <li>
                                <Link to="/conditions">Podminky</Link>
                            </li>
                            <li>
                                <Link to="/contacts">Kontakty</Link>
                            </li>
                        </ul>

                    </div>
                    <div className={styles.socials}>
                        <span>Zavolejte nám:&nbsp;</span><a href="tel:+420736195020">736 195 020</a>
                    </div> */