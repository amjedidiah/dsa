/**
 * @typedef key
 * @type {string | number}
 * @memberof HashTable
 */

/**
 * @class HashTable
 */
class HashTable {
  /**
   * @constructor
   * @param {number} size
   */
  constructor(size) {
    this.data = new Array(size);
  }

  /**
   * Hashes a key
   * @param {key} key
   * @return {number} - hashed key
   */
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  /**
   * Returns all the key/value pairs of the HashTable
   * @return {array[]}
   */
  _pairs() {
    const pairs = [];

    for (let i = 0; i< nonEmptyBuckets.length; i++) {
      if (nonEmptyBuckets[i]) pairs.push(nonEmptyBuckets[i]);
    }


    return pairs;
  }

  /**
   * Sets a key/value pair in the hash table
   * @param {key} key
   * @param {*} value
   */
  set(key, value) {
    const hash = this._hash(key);

    if (!this.data[hash]) this.data[hash] = [];
    this.data[hash].push([key, value]);
  }

  /**
   * Returns the value for given hash key
   * @param {key} key
   * @return {any}
   */
  get(key) {
    const hash = this._hash(key);
    const currentBucket = this.data[hash];

    if (!currentBucket) return undefined;

    return currentBucket.find((item) => item[0] === key)[1];
  }

  /**
   * Returns all the keys of the HashTable
   * @return {string[]}
   */
  keys() {
    return this._pairs().map(([key]) => key);
  }

  /**
   * Returns all the values of the HashTable
   * @return {string[]}
   */
  values() {
    return this._pairs().map(([key, value]) => value);
  }
}

const myHashTable = new HashTable(500);
myHashTable.set('grapes', 1000);
myHashTable.set('apples', 5000);
myHashTable.keys();
myHashTable.values();
