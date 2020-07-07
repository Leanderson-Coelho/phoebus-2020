import Axios from 'axios';
import { API, buildUrlSecurity, getDataResponse } from './apiConfig';
import { Comic } from './../model/Comic';

export default {
  async loadComics() {
    const response = await Axios.get(
      `${API}/comics${buildUrlSecurity()}&limit=100&offset=20`,
    );
    const rawComics = getDataResponse(response);

    return this.manipuleRawComic(rawComics);
  },

  manipuleRawComic(rawComics) {
    const comics = rawComics.map((comic) => {
      // load date
      let comicDate = new Date();
      // if (comic.dates && comic.dates.length > 0) {
      //   comic.dates.forEach((date) => {
      //     if (date.type === 'onsaleDate') {
      //       console.log(date.date);
      //       comicDate = new Date(`${date.date}`);
      //     }
      //   });
      // }
      // laod price
      let comicPrice = 5.49;
      if (comic.prices && comic.prices.length > 0) {
        comic.prices.forEach((price) => {
          if (price.type === 'printPrice' && price.price > 0) {
            comicPrice = price.price;
          }
        });
      }
      return new Comic(
        comic.id,
        comic.title,
        comicDate,
        comicPrice,
        this.manipuleThambnail(comic.thumbnail),
      );
    });
    return comics;
  },

  manipuleThambnail(thumb) {
    return `${thumb.path}/portrait_incredible.${thumb.extension}`;
  },
};
