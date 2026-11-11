import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        &copy; {new Date().getFullYear()} Creative Studio. All rights reserved.
      </div>
    </footer>
  );
}