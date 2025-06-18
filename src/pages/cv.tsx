import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import styles from './cv.module.css';
import cvList from '../data/cv-list.json';

const formatLabel = (filename: string): string => {
  const name = filename.replace(/^ahmedalimsoliman-?|\.pdf$/g, '');
  if (!name) return 'General CV';
  return name
    .toUpperCase()
    .replace(/-/g, ' ')
    .replace(/\bEN\b/, '(English)');
};

export default function CVPage(): JSX.Element {
  return (
    <Layout title="Download CVs" description="Ahmed Soliman's Resume">
      <div className={styles.container}>
        <h1>My CV Collection</h1>
        <p className={styles.description}>Click any CV below to preview and download</p>
        <div className={styles.grid}>
          {cvList.map((cv) => (
            <div key={cv} className={styles.card}>
              <div className={styles.preview}>
                <embed
                  src={`/cv/${cv}#toolbar=0`}
                  type="application/pdf"
                  width="100%"
                  height="200px"
                />
              </div>
              <div className={styles.info}>
                <h3>{formatLabel(cv)}</h3>
                <a href={`/cv/${cv}`} download className={styles.downloadBtn}>
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
