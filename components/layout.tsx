import React from "react";
import variables from '../styles/variables.module.scss'
import styles from '../styles/Home.module.scss'

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div
        className={styles.container}
        color={variables.primaryColor}>{children}
    </div>;
}
