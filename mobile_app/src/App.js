import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    console.log(user);
    setUser({});
  }, []);

  return (
    <>
      <Text>Ola mundo</Text>
    </>
  );
};

export default App;
