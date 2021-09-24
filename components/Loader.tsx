import styles from "@styles/loading.module.css";

export default function Loader() {
    return (
        <div className={styles.loadingioEclipse}>
            <div className={styles.icon}>
                <div></div>
            </div>
        </div>
    );
}
