import React from "react";
import "./App.css";

import Card from 'react-bootstrap/Card';

import{featureData} from './data/data';

export const CardList = () => {
  return (
    <>
      
	  {featureData.map((feature, key) => {
		  
		  return (
		  
		<div class = "container">
		<Card className = "shadow">
		
		
		  <Card.Header bg="primary" as ="h5">{feature.title}</Card.Header>
			
		  <Card.Body>
			<Card.Title></Card.Title>
			
			{feature.body.map((line) => {
				return (
				<Card.Text>
				{line}
				</Card.Text>	
				);
			})}
			
			
			{feature.imgs.map((img) => {
				return (
				<Card.Img variant="top" src={process.env.PUBLIC_URL + img} />
				);  
		  })}
			
		  </Card.Body>
		  <Card.Footer className="text-muted">{feature.date}</Card.Footer>
		</Card>
		  
		  <br/>
		</div>
		  
		  );
		  
		  
	  })}
	  
    </>
  );
};