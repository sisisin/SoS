import StoneSkin from 'stone-skin/with-tv4';
import 'babel-polyfill';

export class ServiceStore extends StoneSkin.IndexedDb {
  constructor(){
    super();
    this.storeName = 'Service';
    this.schema = {
      properties: {
        title: { type: 'string' }
        , user: { type: 'string' }
        , pass: { type: 'string' }
        , mail: { type: 'string' }
      }
    }
  }
}
