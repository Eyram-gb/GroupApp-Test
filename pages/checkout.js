import Head from "next/head";
import styles from "../styles/checkout.module.css";
import NavBar from "../components/navBar";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

function Checkout() {
  const cartProducts = useSelector((state) => state.cart.cart);
  const cartNum = useSelector((state) => state.cart.cartNumber);
  const grandTotal = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar></NavBar>
        <section>
          <h1 className="header">{!cartNum ? "Cart Is Empty 😔" : "MyCart"}</h1>
          <div className={styles.checkout}>
            <div className={styles.detailsWrapper}>
              {cartProducts.map((cartItem) => {
                return (
                  <div className={styles.productDetails}>
                    <div className={styles.imgContainer}>
                      <img
                        src={cartItem.images[0]}
                        alt="Product image"
                        className={styles.img}
                      />
                    </div>
                    <div className={styles.productInfo}>
                      <div className={styles.info}>
                        <p>{cartItem.title}</p>
                        <p
                          className={styles.remove}
                          onClick={() => dispatch(removeFromCart(cartItem))}
                        >
                          🗑️
                        </p>
                      </div>
                      <div className={styles.quantity}>
                        <p>Qty: {cartItem.quantity} </p>
                      </div>
                      <div className={styles.info}>
                        <p>
                          Price: <span>${cartItem.price}</span>
                        </p>
                        <p>
                          SubToTal: <span>${cartItem.totalPrice}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.paymentSummary}>
              <p className={styles.title}>Order Summary</p>
              <div className={styles.info}>
                <p>selected Item(s)</p>
                <p>{cartNum}</p>
              </div>

              <div className={styles.total}>
                <p>Grand Total</p>
                <p>$ {grandTotal}</p>
              </div>
              <button href="" className={styles.paymentBtn}>
                Pay For Items
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Checkout;
