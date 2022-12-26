import styles from "../styles/Home.module.css";
import Link from "next/link";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">LOGO</Link>
      <input type="text" placeholder="Search products" />
      <div className={styles.cart}>
        <Link href="/checkout">Cart</Link>
        <p className={styles.cartNumber}>6</p>
      </div>
    </nav>
  );
}
export default NavBar;
