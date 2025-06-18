import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import styles from './cv.module.css';
import cvList from '../data/cv-list.json';

const formatLabel = (filename: string): string => {
  const name = filename.replace(/ahmedalimsoliman-?|\.pdf/g, '');
  return name
    .split('-')
    .map(word => word.toUpperCase())
    .join(' / ');
};

export default function CVPage(): JSX.Element {
  return (
    <Layout title="Download CVs" description="Ahmed Soliman's Resume">
      <div className={styles.container}>
        <h1>Download My CVs</h1>
        <p>Choose any version below:</p>
        <div>
          {cvList.map((cv) => (
            <a
              key={cv}
              href={`/cv/${cv}`}
              download
              className={`${styles.button} ${styles.buttonSecondary}`}
            >
              {formatLabel(cv)}
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
