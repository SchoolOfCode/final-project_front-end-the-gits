import styles from "../styles/Footer.module.css"

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer className={styles.footer}>
            <p>Copyright {year} The Gits</p>
             
        </footer>
      );
}
 
export default Footer;