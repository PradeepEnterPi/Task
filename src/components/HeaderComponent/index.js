import React from 'react';
import { Header, Body, Title } from 'native-base';
import styles from './style'

const HeaderComponet = (props) => {
  return (
    <Header style={styles.headerStyle}>
      <Body style={styles.bodyStyle}>
        <Title style={styles.title} >{props.title}</Title>
      </Body>
    </Header>
  );

}
export default HeaderComponet;