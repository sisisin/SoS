import * as React from 'react';
import {Flux, Component} from 'flumpt';

class MyComponent extends Component {
  componentDidMount(){
    // this.dispatch('increment');
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>service</th>
              <th>user</th>
              <th>pass</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {this.props.list.map(v => <ServiceListLine {...v}/>)}
          </tbody>
        </table>
        {this.props.count}
        <button onClick={() => this.dispatch('increment')}>increment</button>
      </div>
    );
  }
}

class ServiceListLine extends Component {
  render() {
    const {service, user, pass} = this.props;
    return (
      <tr>
        <td>{service}</td>
        <td>{user}</td>
        <td>{pass}</td>
        <td><button onClick={() => this.dispatch('edit')}>edit</button></td>
      </tr>
    );
  }
}

export class App extends Flux {
  constractor({renderer, initialState, middlewares, serviceStore}) {
    super({renderer, initialState, middlewares});
    this.serviceStore = serviceStore;
  }
  subscribe() {
    this.on('increment', () => {
      this.update(({count}) => { return {count: count + 1}; });
    });
  }
  render(state) { return <MyComponent {...state} />;}
}
