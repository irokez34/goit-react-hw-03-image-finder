import React from 'react';

export class Searchbar extends React.Component {
  state = {
    query: '',
    gallery: [],
  };
  handlerSubmit = evt => {
    const { query } = this.state;
    evt.preventDefault();
    if (!query.trim()) return alert('Cannot be empty');
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };
  handleChange = e => {
    this.setState({ query: e.target.value });
  };
  render() {
    return (
      <div className="search-bar-container">
        <header className="searchbar">
          <form className="form" onSubmit={this.handlerSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>
            <input
              value={this.state.query}
              onChange={this.handleChange}
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}
