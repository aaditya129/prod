import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddButton({ text , onClick }) {
  return (
    <div style={{ marginTop: '10px', marginRight:"20px", display: 'flex', justifyContent: 'flex-end' }}>
      <Button onClick={onClick} style={{fontWeight:"bold"}} variant="primary" size="lg">
       + {text}
      </Button>
    </div>
  );
}

export default AddButton;
