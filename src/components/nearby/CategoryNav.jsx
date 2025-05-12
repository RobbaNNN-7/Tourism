import React from 'react';
import styles from '../../pages/nearbysearch.module.css';

const CategoryNav = ({ collections, selectedCollection, onCollectionSelect }) => {
  return (
    <div className={styles.category_nav_container}>
      <div className={styles.category_scroll}>
        {collections.map((collection) => (
          <button
            key={collection.id}
            className={`${styles['category_button']} ${selectedCollection === collection.id ? styles.active : ''}`}
            onClick={() => onCollectionSelect(collection.id)}
          >
            <span className={styles.category_icon}>{collection.icon}</span>
            <span className={styles.category_name}>{collection.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav; 