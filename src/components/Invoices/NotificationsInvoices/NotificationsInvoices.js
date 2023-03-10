import React from "react";
import styles from "./notifications.module.css";

//ADD NOTIFICATIONS INVOICES

export const NotificationsSeller = (props) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.span}>
        <span
          onClick={() => {
            props.setNotificationsSeller(false);
          }}
        >
          X
        </span>
      </div>
      <h4>Field Seller can't be empty!</h4>
    </div>
  );
};

export const NotificationsCustomer = (props) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.span}>
        <span
          onClick={() => {
            props.setNotificationsCustomer(false);
          }}
        >
          X
        </span>
      </div>
      <h4>Field Customer can't be empty!</h4>
    </div>
  );
};

export const NotificationsDate = (props) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.span}>
        <span
          onClick={() => {
            props.setNotificationsDate(false);
          }}
        >
          X
        </span>
      </div>
      <h4>Field Date can't be empty!</h4>
    </div>
  );
};

export const NotificationsAmount = (props) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.span}>
        <span
          onClick={() => {
            props.setNotificationsAmount(false);
          }}
        >
          X
        </span>
      </div>
      <h4>Field Amount can't be empty!</h4>
    </div>
  );
};

export const NotificationsAddSubmit = (props) => {
  return (
    <div className={styles.mainDivAdd}>
      <div className={styles.span}>
        <span
          onClick={() => {
            props.setNotificationsAddSubmit(false);
          }}
        >
          X
        </span>
      </div>
      <h4>You have successfully added an invoice!</h4>
    </div>
  );
};

//EDIT NOTIFICATIONS INVOICES

export const NotificationsSellerEdit = (props) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.span}>
        <span
          onClick={() => {
            props.setNotificationsSeller(false);
          }}
        >
          X
        </span>
      </div>
      <h4>Field Seller can't be empty!</h4>
    </div>
  );
};

export const NotificationsCustomerEdit = (props) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.span}>
        <span
          onClick={() => {
            props.setNotificationsCustomer(false);
          }}
        >
          X
        </span>
      </div>
      <h4>Field Customer can't be empty!</h4>
    </div>
  );
};

export const NotificationsDateEdit = (props) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.span}>
        <span
          onClick={() => {
            props.setNotificationsDate(false);
          }}
        >
          X
        </span>
      </div>
      <h4>Field Date can't be empty!</h4>
    </div>
  );
};

export const NotificationsAmountEdit = (props) => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.span}>
        <span
          onClick={() => {
            props.setNotificationsAmountEdit(false);
          }}
        >
          X
        </span>
      </div>
      <h4>Field Amount can't be empty!</h4>
    </div>
  );
};

export const NotificationsEditSubmit = (props) => {
  return (
    <div className={styles.mainDivEdit}>
      <div className={styles.span}>
        <span
          onClick={() => {
            props.setNotificationsEditSubmit(false);
          }}
        >
          X
        </span>
      </div>
      <h4>You have successfully edited the invoice!</h4>
    </div>
  );
};

//DELETE NOTIFICATIONS INVOICES

export const NotificationsDeleteInvoice = (props) => {
  return (
    <div className={styles.mainDivDelete}>
      <div className={styles.span}>
        <span
          onClick={() => {
            props.setNotificationsDeleteInvoices(false);
          }}
        >
          X
        </span>
      </div>
      <h4>You have successfully deleted the invoice!</h4>
    </div>
  );
};
