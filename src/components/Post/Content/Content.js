// @flow strict
import React from "react";
import styles from "./Content.module.scss";

type Props = {
  body: string,
  title: string,
  description: string,
};

const Content = ({ body, title, description }: Props) => (
  <div className={styles["content"]}>
    <h1 className={styles["content__title"]}>{title}</h1>
    <hr />
    <div className={styles["content__description"]}>
      <p>{description}</p>
    </div>
    <div
      className={styles["content__body"]}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
);

export default Content;
