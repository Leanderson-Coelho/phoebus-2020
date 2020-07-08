import React from 'react';
import { Text } from 'react-native';

const HeaderList = (props) => {
  const { loading } = props;
  const { textStyle } = props;
  const { text } = props;

  return <>{!loading && <Text style={textStyle}>{text}</Text>}</>;
};

export default HeaderList;
