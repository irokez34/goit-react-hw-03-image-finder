import { getSearcth } from 'fetch';
import { Searchbar } from './Searchbar';
import React from 'react';
import { ImageGallery } from './ImageGallery';

import { Loader } from './Loader';
import { Button } from './Button';
import Modal from './Modal';
export class App extends React.Component {
  state = {
    query: '',
    gallery: [],
    isLoading: false,
    error: null,
    visibleLoadMore: null,
    page: 1,
    totalHits: 0,
    showModal: false,
    modalSrc: '',
  };
  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getPhotos(query);
    }
  }

  getPhotos = async (query, page) => {
    if (!query) return;
    this.setState({ isLoading: true });
    try {
      const data = await getSearcth(query);
      if (data.hits.length === 0) return alert('Нічого не знайдено');

      this.setState(prev => ({
        gallery: [...prev.gallery, ...data.hits],
        visibleLoadMore: this.state.page < Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  onHandleSubmit = value => {
    this.setState({
      query: value,
      page: 1,
      gallery: [],
      totalHits: 0,
    });
  };
  onHandleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  ToggleModal = e => {
    const control = e === undefined;

    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    if (!control) {
      if (e.target.localName === 'img') {
        this.setState({
          modalSrc: e.target.attributes.href.nodeValue,
          modalAlt: e.target.attributes.alt.nodeValue,
        });
      }
    }
  };

  render() {
    const {
      isLoading,
      gallery,
      visibleLoadMore,
      showModal,
      modalSrc,
      modalAlt,
    } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.onHandleSubmit} />
        {showModal && (
          <Modal onClose={this.ToggleModal} src={modalSrc} alt={modalAlt} />
        )}
        <ImageGallery images={gallery} onClick={this.ToggleModal} />
        {isLoading && <Loader isLoading={this.state.isLoading} />}
        {visibleLoadMore && <Button onClick={this.onHandleLoadMore} />}
      </div>
    );
  }
}
