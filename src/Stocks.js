import React from "react";
import "./App.css";

import Card from 'react-bootstrap/Card';

import{stockData} from './data/data';

export const Stocks = () => {
  return (
    <>
      <div className="stock-container">Welcome to Stock Tracker</div>
	  {stockData.map((data, key) => {
		  
		  return (
		  
		  <div>
		<Card className="text-center shadow">
		  <Card.Header>Featured</Card.Header>
		  <Card.Body>
			<Card.Title>{data.company}</Card.Title>
			<Card.Text>
				{data.stockPrice}
			</Card.Text>
			
		  </Card.Body>
		  <Card.Footer className="text-muted">{data.timeElapsed}</Card.Footer>
		</Card>
		  
		  <br/>
		  </div>
		  
		  );
		  
		  
	  })}
	  
    </>
  );
};