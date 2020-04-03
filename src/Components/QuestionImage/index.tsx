import React from 'react';
import { QuestionImageProps } from '../../interfaces';
import styles from './styles.module.scss';

export default function QuestionImage({ source }: QuestionImageProps) {
  return <img className={styles.image} src={source} alt="quiz question" />;
}
