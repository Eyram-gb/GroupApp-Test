import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavBar from "../components/navBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [searchItem, setSearchItem] = useState("");

  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar></NavBar>

        <section>
          <form action="" className={styles.form}>
            <input
              type="text"
              placeholder="🔍 Search products"
              onChange={(e) => {
                setSearchItem(e.target.value);
              }}
              className={styles.input}
            />
          </form>
          {searchItem.length > 0 ? (
            <h3
              style={{ textAlign: "center" }}
            >{`Search Result for "${searchItem}"`}</h3>
          ) : null}

          <h1 className="header">our products</h1>
          <div className={styles.cardsContainer}>
            {products
              .filter((item) => {
                if (searchItem == "") {
                  return item;
                } else if (
                  item.title.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                return (
                  <div className={styles.card} key={item.id}>
                    <div className={styles.cardImgContainer}>
                      <img
                        src={item.images[0]}
                        alt="card image"
                        className={styles.cardImg}
                      />
                    </div>
                    <div className={styles.cardInfo}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardDesc}>
                        {item.description.length > 40
                          ? item.description.slice(0, 40) + "..."
                          : item.description}
                      </p>
                      <p className={styles.cardPrice}>${item.price}</p>
                      <div className={styles.btns}>
                        <Link
                          href={`/${item.id}`}
                          className={styles.detailsBtn}
                        >
                          More Details
                        </Link>
                        <a
                          className={styles.cartBtn}
                          onClick={() => dispatch(addToCart(item))}
                        >
                          🛒
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </main>
    </>
  );
}
