'use strict';

import 'babel-polyfill';
import {App} from './component/Main';
import {render} from 'react-dom';
import {ServiceStore} from './js/serviceModel';

const app = {
  initialize: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: async function () {
    const serviceStore = new ServiceStore();
    await serviceStore.ready;
    const renderer = el => { render(el, document.getElementById('storage')); };
    const initialState = { count: 0, list: [] }; 
    const fapp = new App({ renderer, initialState, serviceStore });
    fapp.update(_initialState => _initialState);

    app.receivedEvent('deviceready');
  },
  receivedEvent: function (id) {
  }
}

app.initialize();
