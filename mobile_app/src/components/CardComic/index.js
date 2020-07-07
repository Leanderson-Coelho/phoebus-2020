import React from 'react';
import { View, Text, Image } from 'react-native';

import Style from './style';

const CardComic = (props) => {
  const { index } = props;
  const { comic } = props;

  return (
    <View style={Style.container}>
      {index % 2 === 1 && (
        <View style={Style.rightItem}>
          <View style={Style.b}>
            <Text>
              {comic.title.length < 30
                ? `${comic.title}`
                : `${comic.title.substring(0, 30)}...`}
            </Text>
            <Text>{comic.date.toDateString()}</Text>
          </View>
          <View style={Style.b}>
            <Image
              style={Style.image}
              source={{
                uri: comic.thumbnail,
              }}
            />
          </View>
        </View>
      )}
      {index % 2 === 0 && (
        <View style={Style.leftItem}>
          <View>
            <Image
              style={Style.image}
              source={{
                uri: comic.thumbnail,
              }}
            />
          </View>
          <View style={Style.a}>
            <Text>
              {comic.title.length < 30
                ? `${comic.title}`
                : `${comic.title.substring(0, 30)}...`}
            </Text>
            <Text>{comic.date.toDateString()}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default CardComic;
