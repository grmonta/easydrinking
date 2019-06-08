import React from 'react';
import SearchBar from './SearchBar';
import beer from './apis/beer';
import BeerList from './BeerList';
import BeerDetail from './BeerDetail';
import './App.css';
class App extends React.Component {
  state = { beers: [], selectedBeer: null };

  componentDidMount() {
    this.onTermSubmit('dog');
  }

  onTermSubmit = async term => {
    const response = await beer.get('beers', {
      params: {
        beer_name: term
      }
    });

    this.setState({
      beers: response.data,
      selectedBeer: response.data[0]
    });
  };

  onBeerSelect = beer => {
    this.setState({ selectedBeer: beer });
  };

  render() {
    return (
      <div className="container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <BeerDetail beer={this.state.selectedBeer} />
            </div>
            <div className="five wide column">
              <BeerList
                onBeerSelect={this.onBeerSelect}
                beers={this.state.beers}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
