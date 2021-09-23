import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
// import { fetchPictures } from '../..services/api';
import SearchBar from './components/SearchBar/SearchBar';
import './App.module.css';

export default class App extends Component {
  state = {
    pictureName: null,
  };

  handleFormSubmit = pictureName => {
    this.setState({ pictureName });
  };

  render() {
    return (
      <div>
        <Toaster />
        <SearchBar onSearch={this.handleFormSubmit} />
      </div>
    );
  }
}
