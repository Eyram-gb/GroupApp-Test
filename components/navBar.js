import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

function NavBar() {
  const cartNum = useSelector((state) => state.cart.cartNumber);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        Shoppy
      </Link>

      <div className={styles.cart}>
        <Link href="/checkout">🛒 Cart</Link>
        <p className={styles.cartNumber}>{cartNum}</p>
      </div>
    </nav>
  );
}
export default NavBar;
