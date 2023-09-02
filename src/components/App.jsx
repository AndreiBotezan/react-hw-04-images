import React, { useState } from 'react';
import Wrapper from 'components/Wrapper/Wrapper';
import Section from 'components/Section/Section';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';
import ScrollToTop from 'react-scroll-up';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './services/styles';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
      const [src, setSrc] = useState('');
      const [alt, setAlt] = useState('');

  const handleSubmit = newSearchQuery => {
    if (searchQuery === newSearchQuery) {
      return toast.info('Input new search query.');
    }

    setSearchQuery(newSearchQuery);
  };

    const toggleModal = data => {
      setShowModal(prevState => !prevState);

      if (showModal === false) {
        const { largeImageURL, tags } = data;

        setSrc(largeImageURL);
        setAlt(tags);
      }
    };

  return (
    <Wrapper>
      <Searchbar onSubmit={handleSubmit} />

      <Section>
        <ImageGallery searchQuery={searchQuery} onModalOpen={toggleModal} />
      </Section>

      {showModal && (
        <Modal onModalClose={toggleModal}>
          <img src={src} alt={alt} style={styles.modalImage} />
        </Modal>
      )}

      {/* Notifications */}
      <ToastContainer autoClose={3000} theme="colored" />

      {/* Scroll to top button */}
      <ScrollToTop showUnder={100} style={styles.upButton}>
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </ScrollToTop>
    </Wrapper>
  );
};

export default App;
