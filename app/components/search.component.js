import React from 'react';
import Autocomplete from 'react-autocomplete';

"use strict"; 

var Search = React.createClass({
	handleRenderItem(isHighlighted, item){
	    // Some basic style
	    const listStyles = {
	      item: {
	        padding: '2px 6px',
	        cursor: 'default'
	      },

	      highlightedItem: {
	        color: 'white',
	        background: '#F38B72',
	        padding: '2px 6px',
	        cursor: 'default'
	      }
	    };

	    // Render list items
	    return (
	      <div
	        style={isHighlighted ? listStyles.highlightedItem : listStyles.item}
	        key={item.id.videoId}
	        id={item.id.videoId}
	      >{item.snippet.title}</div>
	    )
	},
	render: function(){
		return (
			<div className="search">
		        <Autocomplete ref="autocomplete" className="autocomplete" inputProps={{title: "Title", test: "test"}} value={this.props.autoCompleteValue} items={this.props.results} getItemValue={(item) => item.snippet.title} onSelect={this.props.handleSelect} onChange={this.props.handleChange} renderItem={this.handleRenderItem.bind(null, false)} />
			</div>
		);
	}
});

export default Search