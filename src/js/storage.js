'use strict';

import 'babel-polyfill';
import StoneSkin from 'stone-skin/with-tv4'
const app = {
  initialize: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function () {
    app.receivedEvent('deviceready');
  },
  receivedEvent: function (id) {
  }
}

app.initialize();

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
