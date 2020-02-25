import React, { Component } from 'react';

const list = [
  {
    id: 1,
    title: 'Yritysrekisteri',
    description: 'Hae rekisteröintipäivällä -  http://avoindata.prh.fi/ytj.html'
  },
  //{
  //  id: 2,
  //  title: 'Yritys_2',
  //  description: 'http://avoindata.prh.fi/ytj.html'
  //},
  //{
  //  id: 3,
  //  title: 'Yritys_3',
  //  description: 'http://avoindata.prh.fi/ytj.html'
  //}
];

let registrationDate = [
  {
    businessId: '',
    companyForm: '',
    detailsUri: '',
    companyName: '' 
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list, registrationDate };
  }

  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <div>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
