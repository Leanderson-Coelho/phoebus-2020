import Axios from 'axios';
import { API, buildUrlSecurity, getDataResponse } from '../config/apiConfig';
import { Comic } from './../model/Comic';
import { ComicDetail } from './../model/ComicDetail';
import { Image } from 'react-native';
import DefaultImage from '../assets/marvel_comics.png';

export default {
  async loadComics() {
    const response = await Axios.get(
      `${API}/comics${buildUrlSecurity()}&limit=20&offset=20`,
    );
    const rawComics = getDataResponse(response);

    return this.manipuleRawComics(rawComics);
  },

  manipuleRawComics(rawComics) {
    const comics = rawComics.map((comic) => {
      return this.manipuleRawComic(comic);
    });
    return comics;
  },

  manipuleRawComic(comic) {
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
  },

  manipuleThambnail(thumb) {
    if (thumb.path.search('image_not_available') === -1) {
      return `${thumb.path}/portrait_incredible.${thumb.extension}`;
    } else {
      const uri = Image.resolveAssetSource(DefaultImage).uri;
      return uri;
    }
  },

  async getComicId(id) {
    const response = await Axios.get(
      `${API}/comics/${id}${buildUrlSecurity()}`,
    );
    const rawComic = getDataResponse(response)[0];
    const c = this.manipuleRawComic(rawComic);
    return new ComicDetail(
      c.id,
      c.title,
      c.date,
      c.price,
      c.thumbnail,
      rawComic.description,
    );
  },
};
