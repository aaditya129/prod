import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddButton from '../AddButton';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import AreaList from './areaList';

const AreaMain = () => {
    const { matchId } = useParams();
    const [showForm, setShowForm] = useState(false);
    const [teams, setTeams] = useState([]);
    const [selectedTeams, setSelectedTeams] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchTeams = async () => {
        try {
            const response = await axios.get('http://143.198.107.248/api/teams/fetchallteamsname');
            setTeams(response.data);
        } catch (error) {
            console.error('Error fetching teams:', error);
            toast.error('Failed to fetch teams. Please try again.');
        }
    };

    useEffect(() => {
        fetchTeams();
    }, []);

    const handleAddButtonClick = () => {
        setShowForm(true);
    };

    const handleFormClose = () => {
        setShowForm(false);
        setSelectedTeams([]);
    };

    const handleCheckboxChange = (teamName) => {
        setSelectedTeams(prevState =>
            prevState.includes(teamName)
                ? prevState.filter(name => name !== teamName)
                : [...prevState, teamName]
        );
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const selectedTeamsData = {
                matchId: matchId,
                team: selectedTeams
            };

            await axios.put(`http://143.198.107.248/api/selectedteams/${matchId}`, selectedTeamsData);
            toast.success('Selected teams submitted successfully!');

            await axios.put(`http://143.198.107.248/api/matchdata/creatematchdata/${matchId}`);
            toast.success('Match data created successfully!');

            setShowForm(false);
        } catch (error) {
            console.error('Error submitting form:', error);
            console.log(error.response.data);
            toast.error('Failed to submit form. Please try again.');
        }
    };

    const filteredTeams = teams.filter(team =>
        team.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <ToastContainer />
            <AddButton text="Select Team" onClick={handleAddButtonClick} />
            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white rounded-lg p-8 w-full max-w-3xl h-3/4 overflow-y-auto relative">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                            onClick={handleFormClose}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">Select Teams</h2>
                        <input
                            type="text"
                            className="mb-4 p-2 border border-gray-300 rounded w-full"
                            placeholder="Search teams by tag"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                {filteredTeams.map((team, index) => (
                                    <div key={index} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={`team-${index}`}
                                            className="mr-2"
                                            checked={selectedTeams.includes(team)}
                                            onChange={() => handleCheckboxChange(team)}
                                        />
                                        <label htmlFor={`team-${index}`} className="text-sm font-medium">
                                            {team}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <AreaList matchId={matchId} />
        </>
    );
};

export default AreaMain;
