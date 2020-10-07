import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'http://192.168.1.5:3015'
});

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {image1: "http://192.168.1.5:3015/113767.webp", image2: "http://192.168.1.5:3015/114399.webp", image3: "http://192.168.1.5:3015/122643.webp", image4: "http://192.168.1.5:3015/125685.webp", image5: "http://192.168.1.5:3015/131329.webp", image6: "http://192.168.1.5:3015/133805.webp"};
    this.changeimageLink = this.changeimageLink.bind(this);
    this.getImagepath = this.getImagepath.bind(this);
    this.setimagefirst = this.setimagefirst.bind(this);
  }

  changeimageLink = () => {
    let args_array = ['image1'];
    let imagelink = this.getImagepath(args_array);
  }

  changeimageLink2 = () => {
    let args_array = ['image2'];
    let imagelink = this.getImagepath(args_array);
  }

  changeimageLink3 = () => {
    let args_array = ['image3'];
    let imagelink = this.getImagepath(args_array);
  }

  changeimageLink4 = () => {
    let args_array = ['image4'];
    let imagelink = this.getImagepath(args_array);
  }

  changeimageLink5 = () => {
    let args_array = ['image5'];
    let imagelink = this.getImagepath(args_array);
  }

  changeimageLink6 = () => {
    let args_array = ['image6'];
    let imagelink = this.getImagepath(args_array);
    this.setimagefirst();
  }

  getImagepath = (args) => {

    instance.get('/random-image-path')
    .then(response => {
      // handle success
      console.log(response.data.filepath);
      this.setState({[args]: response.data.filepath});
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  }

  setimagefirst = () => {
    this.setState({image1: this.state.image6});
  }

  componentDidMount() {
    setInterval(this.changeimageLink2, 10000);
    setInterval(this.changeimageLink3, 10000);
    setInterval(this.changeimageLink4, 10000);
    setInterval(this.changeimageLink5, 10000);
    setInterval(this.changeimageLink6, 10000);
  }

  render() {

    return (
	<div className="Box">
		<img className="image1" width={this.props.width} height={this.props.height} alt="image1" src={this.state.image1} />
		<img className="image2" width={this.props.width} height={this.props.height} alt="image2" src={this.state.image2} />
		<img className="image3" width={this.props.width} height={this.props.height} alt="image3" src={this.state.image3} />
		<img className="image4" width={this.props.width} height={this.props.height} alt="image4" src={this.state.image4} />
		<img className="image5" width={this.props.width} height={this.props.height} alt="image5" src={this.state.image5} />
		<img className="image6" width={this.props.width} height={this.props.height} alt="image6" src={this.state.image6} />
	</div>
    );
  }
}

export default Carousel;