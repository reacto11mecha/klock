import type { Component, Accessor } from "solid-js";

import "@fontsource/cousine/400.css";
import styles from "../styles/Card.module.css";

export interface CardProps {
  hour: Accessor<string>;
  minute: Accessor<string>;
  second: Accessor<string>;
}

const Card: Component<CardProps> = (props) => (
  <article class={`card ${styles.container}`}>
    <header class={styles.header}>
      <span>{props.hour()}</span>
      <span class={styles.gap}>:</span>
      <span>{props.minute()}</span>
      <span class={styles.gap}>:</span>
      <span>{props.second()}</span>
    </header>
  </article>
);

export default Card;
