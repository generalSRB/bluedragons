import React, {Component, Fragment} from 'react';
import {Head} from './Components/Head/Head';
import MenuBar from './Components/MenuBar/MenuBar';
import AllNews from './Components/AllNews/AllNews';
import PhotoSlider from './Components/PhotoSlider/PhotoSlider';
import PlayerCards from './Components/PlayerCards/PlayerCards';
import imageData from './data/imageData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      showPlayerCards: true,
      dataPlayer: [],
      dataNews: []
    }
  }

  onShowCard = (e) => {
    console.log(e.target)
  }

  onShowNews = (e) => {
    console.log(e.target)
  }

  componentDidMount() {

    
    fetch("https://bluedragons-abd9c.firebaseio.com/players.json")
    .then (response => {
      return response.json()
    })
    .then (response => {
      const loadedPlayers = [...response]
      
      this.setState({
        dataPlayer: loadedPlayers
      })
    })

    fetch("https://bluedragons-abd9c.firebaseio.com/news.json")
    .then(response =>{
      return response.json()
    })
    .then(response =>{
      const loadedNews = [...response]

      this.setState({
        dataNews: loadedNews
      })
    })


    } 
  
  render () {
    return (
      <Fragment>
        <Head />

        <MenuBar />
        <AllNews data={this.state.dataNews} showNews={this.onShowNews}/>
    
        <PhotoSlider data={imageData}/>
        <PlayerCards data={this.state.dataPlayer} showInfo={this.onShowCard}/>
      </Fragment>
      
     );
   }
}

export default App;
