import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from 'axios';

export default function CustomCard({ name }) {
  const [cards, setCards] = React.useState([]);
  const [newCardPoints, setNewCardPoints] = React.useState('');
  const [newCardCode, setNewCardCode] = React.useState('');
  const [newCardNumber, setNewCardNumber] = React.useState('');

  // Function to fetch all cards from the API
  const fetchAllCards = () => {
    axios.get('http://localhost:8000/carte/all')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
      });
  };

  // Function to add a new card
  const addNewCard = () => {
    axios.post('http://localhost:8000/carte/add', {
      points: newCardPoints,
      code: newCardCode,
      number: newCardNumber
    })
    .then(response => {
      fetchAllCards(); // Fetch all cards to update the list after adding
      // Clear input fields after adding
      setNewCardPoints('');
      setNewCardCode('');
      setNewCardNumber('');
    })
    .catch(error => {
      console.error('Error adding new card:', error);
    });
  };

  // Function to delete a card
  const deleteCard = (id) => {
    axios.delete(`http://localhost:8000/carte/${id}`)
    .then(response => {
      fetchAllCards(); // Fetch all cards to update the list after deletion
    })
    .catch(error => {
      console.error('Error deleting card:', error);
    });
  };

  // Function to update a card
  const updateCard = (id, updatedData) => {
    axios.put(`http://localhost:8000/carte/${id}`, updatedData)
    .then(response => {
      fetchAllCards(); // Fetch all cards to update the list after updating
    })
    .catch(error => {
      console.error('Error updating card:', error);
    });
  };

  // Fetch all cards when the component mounts
  React.useEffect(() => {
    fetchAllCards();
  }, []);

  return (
    <div>
      <div>
        <TextField
          label="Points"
          value={newCardPoints}
          onChange={(e) => setNewCardPoints(e.target.value)}
        />
        <TextField
          label="Code"
          value={newCardCode}
          onChange={(e) => setNewCardCode(e.target.value)}
        />
        <TextField
          label="Number"
          value={newCardNumber}
          onChange={(e) => setNewCardNumber(e.target.value)}
        />
        <Button onClick={addNewCard}>Add new card</Button>
      </div>
      {cards.map(card => (
        <Card key={card.id} sx={{ maxWidth: 345, marginBottom: 20 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Points: {card.points}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ▌│█║▌║▌║▌│█║▌║▌║<br/>Code: {card.code}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Number: {card.number}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => deleteCard(card.id)}>Delete this card</Button>
            <Button size="small" onClick={() => updateCard(card.id, { points: 'updated points', code: 'updated code', number: 'updated number' })}>Update a Card</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
