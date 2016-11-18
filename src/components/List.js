import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem'

class List extends Component {

  render() {

  const {chocolates,giftChocolates} = this.props;
	var rows = chocolates.map(function(row){
			 return (<ListItem key={row.id} item={row} title="Sell" handleClick={() => giftChocolates(row.id)}/>)
 		},this)

  	return (
  		<table>
        <thead>
  			 <tr>
  				<th>Name</th>
  				<th>Brand</th>
  				<th>Size</th>
  				<th>Price</th>
  				<th>Soh</th>
  			</tr>
        </thead>
        <tbody>
  			{rows}
        </tbody>
  		</table>
  	
  	);
  }
}

export default List