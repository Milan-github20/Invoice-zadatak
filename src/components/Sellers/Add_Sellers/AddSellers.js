import React from "react";
import styles from "../Add_Sellers/addSellers.module.css";
import ReactDOM from "react-dom";

const BackDrop = () => {
  return <div className={styles.backdrop}></div>;
};

const ModalAddSellers = (props) => {
  return (
    <div className={styles.modal}>
      <form>
        <div className={styles.header}>
          <h2>Create an seller</h2>
          <img
            src="./assets/close.png"
            alt=""
            onClick={() => {
              props.closeSellersModal(false);
            }}
          />
        </div>

        <div className={styles.form}>
          <h4>Seller</h4>
          <select />
          <h4>Customer</h4>
          <select />
          <h4>Date</h4>
          <input />
          <h4>Amount</h4>
          <input />
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.discard}
            onClick={() => {
              props.closeSellersModal(false);
            }}
          >
            Discard
          </button>
          <button className={styles.create}>Create</button>
        </div>
      </form>
    </div>
  );
};

const AddSellers = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop></BackDrop>,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <ModalAddSellers
          closeSellersModal={props.closeSellersModal}
        ></ModalAddSellers>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default AddSellers;
