export default class BaseHelper {
  static isPicture (fileData) {
    let pictureTypes = ['image/jpeg', 'image/gif', 'image/png'];
    const matcher = new RegExp('^data:(' + pictureTypes.join('||') + ');', 'i');

    return matcher.test(fileData);
  }
}
