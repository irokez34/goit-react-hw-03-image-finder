import React from 'react';

export class Searchbar extends React.Component {
  state = {
    query: '',
  };
  handlerSubmit = evt => {
    evt.preventDefault();
    const { query } = this.state;
    if (!query.trim()) return alert('Cannot be empty');
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };
  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handlerSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="button-label"></span>
          </button>
          <input
            value={this.state.query}
            onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

// import React, { Component } from 'react';

// class SearchBar extends Component {
//   state = {
//     searchName: '',
//   };

//   handleInputChange = event => {
//     this.setState({ searchName: event.currentTarget.value });
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//     if (!this.state.searchName.trim()) return alert('Can not be empty');
//     this.props.onSubmit(this.state.searchName);
//     this.setState({ searchName: '' });
//   };

//   render() {
//     return (
//       <header className="SearchBar">
//         <form className="SearchForm" onSubmit={this.handleSubmit}>
//           <button type="submit" className="SearchForm-button">
//             <span className="button-label">Search</span>
//           </button>

//           <input
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.searchName}
//             onChange={this.handleInputChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default SearchBar;
