'use client';
import { useState, useEffect } from 'react';
import styles from './animations.module.css';

export default function RootTemplate({ children }) {
    const [transitionStage, setTransitionStage] = useState('fadeOut');

    useEffect(() => setTransitionStage('fadeIn'), []);

    return (
        <div className={`${styles.content}`}>
            <div className={`${styles.page} ${styles[transitionStage]}`}>{children}</div>
        </div>
    );
}
