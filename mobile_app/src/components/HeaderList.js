import React from 'react';
import { Text } from 'react-native';

const HeaderList = (props) => {
  const { loading } = props;
  const { textStyle } = props;
  return (
    <>
      {!loading && (
        <Text style={textStyle}>Arrante para baixo para carregar mais...</Text>
      )}
    </>
  );
};

export default HeaderList;
