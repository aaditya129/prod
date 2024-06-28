import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddButton from '../AddButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Tmain = () => {
  const [tournaments, setTournaments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editTournament, setEditTournament] = useState(null);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await axios.get('http://143.198.107.248/api/tournaments/fetchalltournaments');
        console.log('Tournaments fetched successfully:', response.data);
        setTournaments(response.data);
      } catch (error) {
        console.error('Error fetching tournaments:', error);
      }
    };

    fetchTournaments();
  }, []);

  const filteredTournaments = tournaments.filter(tournament =>
    tournament.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddTournamentClick = () => {
    setEditTournament(null);
    setShowForm(true);
  };

  const handleEditTournamentClick = (tournament) => {
    setEditTournament(tournament);
    setShowForm(true);
  };

  const handleDeleteTournament = async (tournamentId) => {
    try {
      await axios.delete(`http://143.198.107.248/api/tournaments/deletetournament/${tournamentId}`);
      setTournaments(tournaments.filter(tournament => tournament._id !== tournamentId));
      toast.success('Tournament deleted successfully!');
    } catch (error) {
      console.error('Error deleting tournament:', error);
      toast.error('Failed to delete tournament. Please try again.');
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditTournament(null);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newTournament = {
      name: formData.get('name'),
      url: formData.get('url'),
      url2: formData.get('url2'),
      day: formData.get('day'),
      primaryColor: formData.get('primaryColor'),
      secondaryColor: formData.get('secondaryColor'),
      textcolor1: formData.get('textcolor1'),
      textcolor2: formData.get('textcolor2'),
    };

    try {
      if (editTournament) {
        const response = await axios.put(`http://143.198.107.248/api/tournaments/updatetournament/${editTournament._id}`, newTournament);
        console.log('Tournament updated successfully:', response.data);
        setTournaments(tournaments.map(tournament => (tournament._id === editTournament._id ? response.data : tournament)));
        toast.success('Tournament successfully updated!');
      } else {
        const response = await axios.post('http://143.198.107.248/api/tournaments/createtournament', newTournament);
        console.log('Tournament added successfully:', response.data);
        setTournaments([...tournaments, response.data]);
        toast.success('Tournament successfully added!');
      }
      setShowForm(false);
      setEditTournament(null);
    } catch (error) {
      console.error('Error submitting tournament:', error);
      toast.error('Failed to submit tournament. Please try again.');
    }
  };

  return (
    <>
      <ToastContainer />
      <AddButton text="Add Tournament" onClick={handleAddTournamentClick} />
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 w-full max-w-3xl h-3/4 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{editTournament ? 'Edit Tournament' : 'Add New Tournament'}</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">Tournament Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded"
                  defaultValue={editTournament ? editTournament.name : ''}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="url">Tournament URL:</label>
                <input
                  type="text"
                  id="url"
                  name="url"
                  className="w-full p-2 border border-gray-300 rounded"
                  defaultValue={editTournament ? editTournament.url : ''}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="url2">Tournament URL 2:</label>
                <input
                  type="text"
                  id="url2"
                  name="url2"
                  className="w-full p-2 border border-gray-300 rounded"
                  defaultValue={editTournament ? editTournament.url2 : ''}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="day">Day:</label>
                <input
                  type="text"
                  id="day"
                  name="day"
                  className="w-full p-2 border border-gray-300 rounded"
                  defaultValue={editTournament ? editTournament.day : ''}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="primaryColor">Primary Color:</label>
                <input
                  type="text"
                  id="primaryColor"
                  name="primaryColor"
                  className="w-full p-2 border border-gray-300 rounded"
                  defaultValue={editTournament ? editTournament.primaryColor : ''}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="secondaryColor">Secondary Color:</label>
                <input
                  type="text"
                  id="secondaryColor"
                  name="secondaryColor"
                  className="w-full p-2 border border-gray-300 rounded"
                  defaultValue={editTournament ? editTournament.secondaryColor : ''}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="textcolor1">Text Color 1:</label>
                <input
                  type="text"
                  id="textcolor1"
                  name="textcolor1"
                  className="w-full p-2 border border-gray-300 rounded"
                  defaultValue={editTournament ? editTournament.textcolor1 : ''}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="textcolor2">Text Color 2:</label>
                <input
                  type="text"
                  id="textcolor2"
                  name="textcolor2"
                  className="w-full p-2 border border-gray-300 rounded"
                  defaultValue={editTournament ? editTournament.textcolor2 : ''}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button type="button" className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2" onClick={handleFormClose}>Cancel</button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">{editTournament ? 'Update' : 'Submit'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className={`mt-2 ${tournaments.length < 3 ? 'min-h-screen' : 'h-auto'} bg-slate-700`}>
        <div className="max-w-9xl mx-auto px-4 py-8">
          <input
            type="text"
            placeholder="Search by Tournament Name..."
            className="w-full max-w-lg p-2 mb-4 border border-gray-300 rounded"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            {filteredTournaments.map((tournament, tournamentIndex) => (
              <div key={tournamentIndex} className='tournament bg-[#344A70] p-4'>
                <div className="flex justify-between items-center">
                  <div>
                    <Link to={`/tournament/${tournament._id}`} style={{ fontFamily: 'Bebas Neue' }} className='font-bebas-neue font-bold text-2xl'>{tournament.name}</Link>
                  </div>
                  <div>
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded mr-2"
                      onClick={() => handleEditTournamentClick(tournament)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                      onClick={() => handleDeleteTournament(tournament._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tmain;
