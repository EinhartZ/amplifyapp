import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
	  
	<Card>
	  <Card.Header>Featured</Card.Header>
	  <Card.Body>
		<Card.Title>Special title treatment</Card.Title>
		<Card.Text>
		  With supporting text below as a natural lead-in to additional content.
		</Card.Text>
		<Button variant="primary">Go somewhere</Button>
	  </Card.Body>
	</Card>
	
	<Card>
	  <Card.Header>Quote</Card.Header>
	  <Card.Body>
		<blockquote className="blockquote mb-0">
		  <p>
			{' '}
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
			erat a ante.{' '}
		  </p>
		  <footer className="blockquote-footer">
			Someone famous in <cite title="Source Title">Source Title</cite>
		  </footer>
		</blockquote>
	  </Card.Body>
	</Card>
	  
    </div>
  );
}

export default App;
