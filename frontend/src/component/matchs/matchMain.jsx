import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import AddButton from '../AddButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MatchMain = () => {
    const { groupStageId } = useParams();
    const [matches, setMatches] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editMatch, setEditMatch] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [formValues, setFormValues] = useState({ match_no: '', time: '', map: 'ERANGEL' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    

    const fetchMatches = useCallback(async () => {
        if (!groupStageId) return;
        try {
            const response = await axios.get(`http://143.198.107.248/api/matches/fetchallmatches/${groupStageId}`);
            setMatches(response.data);
        } catch (error) {
            console.error('Error fetching matches:', error);
        }
    }, [groupStageId]);

    useEffect(() => {
        fetchMatches();
    }, [fetchMatches]);

    const handleAddMatchClick = () => {
        setEditMatch(null);
        setFormValues({ match_no: '', time: '', map: 'ERANGEL' });
        setShowForm(true);
    };

    const handleEditMatchClick = (match) => {
        setEditMatch(match);
        setFormValues({ match_no: match.match_no, time: match.time, map: match.map });
        setShowForm(true);
    };

    const handleDeleteMatch = async (matchId) => {
        if (window.confirm('Are you sure you want to delete this match?')) {
            try {
                await axios.delete(`http://143.198.107.248/api/matches/deletematch/${matchId}`);
                setMatches(matches.filter(match => match._id !== matchId));
                toast.success('Match deleted successfully!');
            } catch (error) {
                console.error('Error deleting match:', error);
                toast.error('Failed to delete match. Please try again.');
            }
        }
    };

    const handleFormClose = () => {
        setShowForm(false);
        setEditMatch(null);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const newMatch = {
            match_no: formValues.match_no,
            time: formValues.time,
            map: formValues.map,
            group_id: groupStageId,
        };

        try {
            if (editMatch) {
                const response = await axios.put(`http://143.198.107.248/api/matches/updatematch/${editMatch._id}`, newMatch);
                setMatches(matches.map(match => (match._id === editMatch._id ? response.data : match)));
                toast.success('Match successfully updated!');
            } else {
                const response = await axios.post('http://143.198.107.248/api/matches/creatematch', newMatch);
                setMatches([...matches, response.data]);
                toast.success('Match successfully added!');
            }
            setShowForm(false);
            setEditMatch(null);
        } catch (error) {
            console.error('Error submitting match:', error);
            toast.error('Failed to submit match. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const filteredMatches = matches.filter(match =>
        match.match_no.toString().includes(searchQuery.toLowerCase()) ||
        match.time.toLowerCase().includes(searchQuery.toLowerCase()) ||
        match.map.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <>
            <ToastContainer />
            <AddButton text="Add Match" onClick={handleAddMatchClick} />
            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white rounded-lg p-8 w-full max-w-3xl h-3/4 overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4">{editMatch ? 'Edit Match' : 'Add New Match'}</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="match_no">Match Number:</label>
                                <input
                                    type="number"
                                    id="match_no"
                                    name="match_no"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={formValues.match_no}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="time">Time:</label>
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={formValues.time}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="map">Map:</label>
                                <select
                                    id="map"
                                    name="map"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={formValues.map}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="ERANGEL">ERANGEL</option>
                                    <option value="MINAMAR">MINAMAR</option>
                                    <option value="SHANOK">SHANOK</option>
                                </select>
                            </div>
                            <input
                                type="hidden"
                                id="group_id"
                                name="group_id"
                                value={groupStageId}
                                readOnly
                            />
                            <div className="flex justify-end">
                                <button type="button" className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2" onClick={handleFormClose}>Cancel</button>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : editMatch ? 'Update' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <div className={`mt-2 ${matches.length < 3 ? 'min-h-screen' : 'h-auto'} bg-slate-700`}>
                <div className="max-w-9xl mx-auto px-4 py-8">
                    <input
                        type="text"
                        placeholder="Search by Match Number, Time, or Map..."
                        className="w-full max-w-lg p-2 mb-4 border border-gray-300 rounded"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {filteredMatches.map((match, index) => (
                            <div key={index} className='team bg-[#344A70] p-4'>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <Link to={`/match/${match._id}`}  style={{ fontFamily: 'Bebas Neue' }} className='font-bebas-neue font-bold text-2xl'>Match #{match.match_no}</Link>
                                        <div style={{ fontFamily: 'Bebas Neue' }} className='font-bebas-neue font-bold text-2xl'>Time: {match.time}</div>
                                        <div style={{ fontFamily: 'Bebas Neue' }} className='font-bebas-neue font-bold text-2xl'>Map: {match.map}</div>
                                    </div>
                                    <div>
                                        <button
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded mr-2"
                                            onClick={() => handleEditMatchClick(match)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                                            onClick={() => handleDeleteMatch(match._id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                <hr className='bg-white h-[2px] border-none mt-2 mb-4' />
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </>
        );
    };
    
    export default MatchMain;
    