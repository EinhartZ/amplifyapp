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
		
		
		  <Card.Header as ="h5">{data.title}</Card.Header>
			
		  <Card.Body>
			<Card.Title></Card.Title>
			<Card.Text>
				{data.body}
			</Card.Text>
			
			{data.imgs.map((img) => {
				return (
				<Card.Img variant="top" src={process.env.PUBLIC_URL + img} />
				);  
		  })}
			
		  </Card.Body>
		  <Card.Footer className="text-muted">{data.date}</Card.Footer>
		</Card>
		  
		  <br/>
		  </div>
		  
		  );
		  
		  
	  })}
	  
    </>
  );
};