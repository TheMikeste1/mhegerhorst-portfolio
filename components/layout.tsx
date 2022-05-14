import React from "react";
import variables from '../styles/variables.module.scss'
import styles from '../styles/Home.module.scss'

interface LayoutProps {
    children: React.ReactNode;
}


export default function Layout({ children }: LayoutProps) {
    return <div
        className={styles.container}
        color={variables.primaryColor}>{children}
    </div>;
}
