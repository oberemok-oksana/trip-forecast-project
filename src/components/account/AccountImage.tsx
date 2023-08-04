import styles from "./AccountImage.module.css";

const AccountImage = () => {
  return (
    <div className={styles["image-wrapper"]}>
      <div className={styles["image-background"]}>
        <img
          className={styles.image}
          src="/images/icons8-pixel-cat-40.png"
          alt="cat"
        />
      </div>
    </div>
  );
};

export default AccountImage;
