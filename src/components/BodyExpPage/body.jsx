import styles from "./body.module.css";

export default function SearchFilterBar() {

    return (
        <div className={styles.bar}>
            <div className={styles.inputContainer}>
                <input
                type="text"
                placeholder="Type to Search"
                className={styles.input}
                />
                <button className={styles.button}>Search</button>
            </div>
            
            <button
                className={styles.filter}
            >
                Filter <img src="filter_alt.svg"  className="ml-2" />
            </button>
        </div>
    );
}
