import styles from '../Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
          <h2>SANDAGA BLOG</h2>
          <nav>
            <ul>
                <li>HOME</li>
                <li>PROFILE</li>
                <li>PROJECT</li>
                <li>BLOG</li>
                <li>PORTFOLIO</li>
                <li>CONTACT</li>
            </ul>
          </nav>
        </header>
    );
}

export default Header;