import styles from "./Footer.module.css";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <footer>
            <div className={styles.footerWrapper}>
                <button className={`btn btn-danger ${styles.top}`} onClick={scrollToTop}>Volver arriba</button>
                {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a class navbar-dark bg-dark ou navbar-light bg-light  */}
                <div className={`navbar-light bg-light} ${styles.footer}`}>
                    <div className="container">
                        <div className={`row`}>
                            <div className="col-sm-12 col-lg-6">
                                {/* //Na linha seguinte deverá ser feito um teste se a aplicação
                // está em dark mode e deverá utilizar o css correto */}
                                <img className={`${styles.dhLogo}`} src="/images/logo.png" alt='logo' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer