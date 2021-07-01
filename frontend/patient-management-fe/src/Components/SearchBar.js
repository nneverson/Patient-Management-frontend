
import React from 'react';


class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
       <div className="container">
                    <input value={this.state.searchTerm} onChange={e => this.setState(e.target.value)} type="text" placeholder="Search" />
                </div>
      </div>
    );
  }
}

export default SearchBar; 