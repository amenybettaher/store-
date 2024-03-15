import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

const cardContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
};

const cardStyle = {
  width: '23%', // Adjust as needed based on your design and spacing requirements
  marginBottom: '20px',
};

export default function CustomCard({ name }) {
  const [cards, setCards] = React.useState([]);
  const [newCardPoints, setNewCardPoints] = React.useState('');
  const [newCardCode, setNewCardCode] = React.useState('');
  const [newCardNumber, setNewCardNumber] = React.useState('');
  const [editPopupOpen, setEditPopupOpen] = React.useState(false);
  const [editedCard, setEditedCard] = React.useState(null);
  const [editedPoints, setEditedPoints] = React.useState('');
  const [editedCode, setEditedCode] = React.useState('');
  const [editedNumber, setEditedNumber] = React.useState('');

  const fetchAllCards = () => {
    axios.get('http://localhost:8000/carte/all')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error('Error fetching cards:', error);
      });
  };

  const addNewCard = () => {
    axios.post('http://localhost:8000/carte/add', {
      points: newCardPoints,
      code: newCardCode,
      number: newCardNumber
    })
    .then(response => {
      fetchAllCards();
      setNewCardPoints('');
      setNewCardCode('');
      setNewCardNumber('');
    })
    .catch(error => {
      console.error('Error adding new card:', error);
    });
  };

  const deleteCard = (id) => {
    axios.delete(`http://localhost:8000/carte/${id}`)
    .then(response => {
      fetchAllCards();
    })
    .catch(error => {
      console.error('Error deleting card:', error);
    });
  };

  const openEditPopup = (card) => {
    setEditedCard(card);
    setEditedPoints(card.points);
    setEditedCode(card.code);
    setEditedNumber(card.number);
    setEditPopupOpen(true);
  };

  const closeEditPopup = () => {
    setEditPopupOpen(false);
    setEditedCard(null);
    setEditedPoints('');
    setEditedCode('');
    setEditedNumber('');
  };

  const updateCard = () => {
    axios
      .put(`http://localhost:8000/carte/${editedCard.id}`, {
        points: editedPoints,
        code: editedCode,
        number: editedNumber,
      })
      .then((response) => {
        fetchAllCards();
        closeEditPopup();
      })
      .catch((error) => {
        console.error('Error updating card:', error);
      });
  };

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
      <div style={cardContainerStyle}>
        {cards.map((card) => (
          <div key={card.id} style={cardStyle}>
            <Card key={card.id}>
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
                <Button
                  size="small"
                  onClick={() => deleteCard(card.id)}
                >
                  Delete this card
                </Button>
                <Button
                  size="small"
                  onClick={() => openEditPopup(card)}
                >
                  Update this card
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
      <Dialog
        open={editPopupOpen}
        onClose={closeEditPopup}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Card</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Points"
            fullWidth
            value={editedPoints}
            onChange={(e) => setEditedPoints(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Code"
            fullWidth
            value={editedCode}
            onChange={(e) => setEditedCode(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Number"
            fullWidth
            value={editedNumber}
            onChange={(e) => setEditedNumber(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEditPopup} color="primary">
            Cancel
          </Button>
          <Button onClick={updateCard} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
