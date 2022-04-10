import * as React from "react"
import * as styles from "./_MainMenu.module.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const MainMenu = () => {
    return (
        <div className={styles.mainMenu}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <StaticImage
                        src="../../images/groufo_logo.svg"
                        /* width={53} */
                        /* quality={100} */
                        formats={["auto", "webp", "avif"]}
                        alt="A Groufo logo"
                        style={{  }}
                    />
                </div>
                <div className={styles.items}>
                    <div className={styles.pages}>
                        <ul>
                            <li>
                                <Link to="/cars">Auta</Link>
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
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MainMenu