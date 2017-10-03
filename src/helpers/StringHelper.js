import BaseHelper from './BaseHelper';

export default class StringHelper extends BaseHelper {
  static getFileExtension (filename) {
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
  }
}
