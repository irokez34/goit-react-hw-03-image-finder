import { getSearcth } from 'fetch';
import { Searchbar } from './Searchbar';
import React from 'react';
import { ImageGallery } from './ImageGallery';
export class App extends React.Component {
  state = {
    query: '',
    gallery: [],
    isLoading: false,
    error: null,
    loadMore: null,
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getPhotos(query);
    }
  }

  getPhotos = async query => {
    if (!query) return;
    this.setState({ isLoading: true });
    try {
      const data = await getSearcth(query);
      console.log(data);
      if (data.hits.length === 0) return alert('Нічого не знайдено');
      this.setState({ gallery: data.hits });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  onHandleSubmit = value => {
    this.setState({ query: value });
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.onHandleSubmit} />
        <ImageGallery data={this.state.gallery} />
      </div>
    );
  }
}
