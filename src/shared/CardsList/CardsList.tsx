import React from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import { useContext } from 'react';
import { postContext } from '../context/postContext';



export function CardsList() {
  const postData = useContext(postContext)
  console.log(postData);

  const CardItem = postData.map((item) => {
    console.log(item);
    
    return (
      <Card cardContent={item} />
    )
  })
  return (
    <ul className={styles.cardsList}>
      {CardItem} 
    </ul>
  );
}
