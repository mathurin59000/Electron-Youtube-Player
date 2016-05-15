//React library
import React from 'react';

//Sound component
import Sound from 'react-sound';

//Axios for Ajax
import Axios from 'axios';

//Custom components
import Search from '../components/search.component';
import Footer from '../components/footer.component';
import YoutubePlayer from 'react-youtube-player';

"use strict"; 

class AppContainer extends React.Component {

  constructor(props) {
     super(props);
     this.apikey = 'AIzaSyD0WtrkfGnp0t2j91c74nWnUo1h8QIq0Ng';
     this.state = {
       results: [],
       playbackState: "unstarted",
       currentVideo : null,
       videoId: 'yG88Mx-DgJ4',
       autoCompleteValue: ''
     };
   }

 componentDidMount() {
    //this.randomTrack();
  }

  handleSelect(value, item){
    this.setState({ autoCompleteValue: value, currentVideo: item , videoId: item.id.videoId});
  }

  playVideo(){
    this.setState({playbackState: "playing"});
  }

  stopVideo(){
    this.setState({playbackState: "paused"});
  }

  handleChange(event, value) {
    this.setState({'autoCompleteValue': value});

    let _this = this;
    //Request for a playlist via Soundcloud using a client id
    Axios.get(`https://www.googleapis.com/youtube/v3/search?key=${this.apikey}&type=video&maxResults=10&pageToken=true&part=id,snippet&fields=items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken&q=${this.state.autoCompleteValue}`)
      .then(function (response) {
        //Set the track state with a random track from the playlist
        _this.setState({results: response.data.items});
      })
      .catch(function (err) {
        //If something goes wrong, let us know
        console.log(err);
      });
  }

  render () {
    const scotchStyle = {
      width: '500px',
      height: '430px'
    }
    return (
      <div className="scotch_music" style={scotchStyle}>
        <Search
          autoCompleteValue={this.state.autoCompleteValue}
          results={this.state.results}
          handleSelect={this.handleSelect.bind(this)}
          handleChange={this.handleChange.bind(this)}
        />
        <YoutubePlayer
          width="100%"
          height="83%"
            videoId={this.state.videoId}
            playbackState={this.state.playbackState}
            configuration={
                {
                    rel: 0,
                    showinfo: 1,
                    controls: 1,
                    fs: 0,
                    loop: 0,
                    modestbranding: 1,
                    iv_load_policy: 3,
                    disablekb: 1,
                    autohide: 2
                }
            }
        /> 
      </div>
    );
  }
}

export default AppContainer