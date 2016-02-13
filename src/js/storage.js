'use strict';

import 'babel-polyfill';
import StoneSkin from 'stone-skin/with-tv4';

const app = {
  initialize: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: async function () {
    let store = new ServiceStore();
    await store.ready;
    await store.save([
      {_id: 0, title: 'hoge', user: 'sisisin', pass: 'hogepass', mail: 'ho'}
      , {_id: 1, title: 'fuga', user: 'sisisin', pass: 'fugapass', mail: 'fu'}
    ]);

    app.receivedEvent('deviceready');
  },
  receivedEvent: function (id) {
  }
}

class ServiceStore extends StoneSkin.IndexedDb {
  constructor() {
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

app.initialize();