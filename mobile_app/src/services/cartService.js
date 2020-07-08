import AsyncStorage from '@react-native-community/async-storage';
import { cartKey } from './../config/storage';
export default {
  async loadAll() {
    const value = JSON.parse(await AsyncStorage.getItem(cartKey));
    console.log(value);
    return value;
  },

  async addItem(item) {
    let current = await this.loadAll();
    if (current && current.length > 0) {
      if (!this.findItem(item.id, current)) {
        current.push(item);
      }
    } else {
      current = [item];
    }
    await AsyncStorage.setItem(cartKey, JSON.stringify(current));
    console.log('added new item');
  },

  async saveList(list) {
    await AsyncStorage.setItem(cartKey, JSON.stringify(list));
  },

  async removeItem(itemId) {
    const all = await this.loadAll();
    console.log('all', all.length);
    const updatedList = all.filter((i) => {
      if (i.id === itemId) {
        return false;
      }
      return true;
    });
    await this.saveList(updatedList);
    console.log('removed item');
  },

  async removeAll() {
    await this.saveList([]);
  },

  findItem(itemId, cart) {
    let found = false;
    cart.forEach((i) => {
      if (i.id === itemId) {
        found = true;
      }
    });
    return found;
  },
};
