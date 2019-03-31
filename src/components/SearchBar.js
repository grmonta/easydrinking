import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  render() {
    return (
      <div className="searchBar ui segment">
        <form action="" className="ui form">
          <div className="field">
            <label htmlFor="">Beer Search</label>
            <input type="text" value={this.state.term} onChange={onForm} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
