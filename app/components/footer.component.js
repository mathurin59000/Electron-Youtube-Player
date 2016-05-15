import React from 'react';

"use strict"; 

class Footer extends React.Component {
  render(){
    return(
      <div className="footer">
        <p>Love from <img src="public/img/raptor.png" className="logo"/>
            & <img src="public/img/youtube.png" className="soundcloud"/></p>
      </div>
    )
  }

}

export default Footer