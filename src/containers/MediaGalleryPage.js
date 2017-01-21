import React, { Component } from 'react';
import { flickrImages, shutterStockVideos } from '../Api/api';

class MediaGalleryPage extends Component {
  componentWillMount () {
    flickrImages('rain').then(images => console.log(images, 'Image'));
    shutterStockVideos('rain').then(videos = console.log(videos, 'Video'));
  }

  render() {
    return (<div></div>)
  }
}

export default MediaGalleryPage;
