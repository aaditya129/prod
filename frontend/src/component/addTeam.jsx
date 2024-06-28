import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddButton from './AddButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTeam = () => {
    const [teams, setTeams] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [editTeam, setEditTeam] = useState(null);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await axios.get('http://143.198.107.248/api/teams/fetchallteams');
                console.log('Teams fetched successfully:', response.data);
                setTeams(response.data);
            } catch (error) {
                console.error('Error fetching teams:', error);
            }
        };

        fetchTeams();
    }, []);

    const filteredTeams = teams.filter(team =>
        team.teamName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddTeamClick = () => {
        setEditTeam(null);
        setShowForm(true);
    };

    const handleEditTeamClick = (team) => {
        setEditTeam(team);
        setShowForm(true);
    };

    const handleDeleteTeam = async (teamId) => {
        if (window.confirm('Are you sure you want to delete this team?')) {
            try {
                await axios.delete(`http://143.198.107.248/api/teams/deleteteam/${teamId}`);
                setTeams(teams.filter(team => team._id !== teamId));
                toast.success('Team deleted successfully!');
            } catch (error) {
                console.error('Error deleting team:', error);
                toast.error('Failed to delete team. Please try again.');
            }
        }
    };

    const handleFormClose = () => {
        setShowForm(false);
        setEditTeam(null);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newTeam = {
            teamName: formData.get('teamName'),
            teamTag: formData.get('teamTag'),
            teamLogo: formData.get('teamLogo'),
            player_1: { name: formData.get('player_1_name'), photo: formData.get('player_1_photo') },
            player_2: { name: formData.get('player_2_name'), photo: formData.get('player_2_photo') },
            player_3: { name: formData.get('player_3_name'), photo: formData.get('player_3_photo') },
            player_4: { name: formData.get('player_4_name'), photo: formData.get('player_4_photo') },
            player_5: { name: formData.get('player_5_name'), photo: formData.get('player_5_photo') },
            player_6: { name: formData.get('player_6_name'), photo: formData.get('player_6_photo') },
            player_7: { name: formData.get('player_7_name'), photo: formData.get('player_7_photo') },
        };

        try {
            if (editTeam) {
                const response = await axios.put(`http://143.198.107.248/api/teams/updateteam/${editTeam._id}`, newTeam);
                console.log('Team updated successfully:', response.data);
                setTeams(teams.map(team => (team._id === editTeam._id ? response.data : team)));
                toast.success('Team successfully updated!');
            } else {
                const response = await axios.post('http://143.198.107.248/api/teams/createteam', newTeam);
                console.log('Team added successfully:', response.data);
                setTeams([...teams, response.data]);
                toast.success('Team successfully added!');
            }
            setShowForm(false);
            setEditTeam(null);
        } catch (error) {
            console.error('Error submitting team:', error);
            toast.error('Failed to submit team. Please try again.');
        }
    };

    const handleCheckboxChange = async (teamIndex, playerIndex) => {
        const playerId = teams[teamIndex][`player_${playerIndex + 1}`]._id;

        try {
            await axios.put(`http://143.198.107.248/api/teams/toggleplayerstatus/${playerId}`);
            const updatedTeams = [...teams];
            updatedTeams[teamIndex][`player_${playerIndex + 1}`].status = !updatedTeams[teamIndex][`player_${playerIndex + 1}`].status;
            setTeams(updatedTeams);
            toast.success('Player status successfully toggled!');
        } catch (error) {
            console.error('Error toggling player status:', error);
            toast.error('Failed to toggle player status. Please try again.');
        }
    };

    return (
        <>
            <ToastContainer />
            <AddButton text="Add team" onClick={handleAddTeamClick} />
            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white rounded-lg p-8 w-full max-w-3xl h-3/4 overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4">{editTeam ? 'Edit Team' : 'Add New Team'}</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="teamName">Team Name:</label>
                                <input
                                    type="text"
                                    id="teamName"
                                    name="teamName"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    defaultValue={editTeam ? editTeam.teamName : ''}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="teamTag">Team Tag:</label>
                                <input
                                    type="text"
                                    id="teamTag"
                                    name="teamTag"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    defaultValue={editTeam ? editTeam.teamTag : ''}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="teamLogo">Team Logo:</label>
                                <input
                                    type="text"
                                    id="teamLogo"
                                    name="teamLogo"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    defaultValue={editTeam ? editTeam.teamLogo : ''}
                                    required
                                />
                            </div>
                            {[...Array(7)].map((_, index) => (
                                <div key={index} className="mb-4">
                                    <label className="block text-sm font-bold mb-2" htmlFor={`player_${index + 1}_name`}>Player {index + 1} Name:</label>
                                    <input
                                        type="text"
                                        id={`player_${index + 1}_name`}
                                        name={`player_${index + 1}_name`}
                                        className="w-full p-2 border border-gray-300 rounded"
                                        defaultValue={editTeam ? editTeam[`player_${index + 1}`]?.name : ''}
                                        required
                                    />
                                    <label className="block text-sm font-bold mb-2" htmlFor={`player_${index + 1}_photo`}>Player {index + 1} Photo:</label>
                                    <input
                                        type="text"
                                        id={`player_${index + 1}_photo`}
                                        name={`player_${index + 1}_photo`}
                                        className="w-full p-2 border border-gray-300 rounded"
                                        defaultValue={editTeam ? editTeam[`player_${index + 1}`]?.photo : ''}
                                    />
                                </div>
                            ))}
                            <div className="flex justify-end">
                                <button type="button" className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2" onClick={handleFormClose}>Cancel</button>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">{editTeam ? 'Update' : 'Submit'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <div className="h-auto bg-slate-700 mt-2">
                <div className="max-w-9xl mx-auto px-4 py-8">
                    <input
                        type="text"
                        placeholder="Search by Team Name..."
                        className="w-full max-w-lg p-2 mb-4 border border-gray-300 rounded"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {filteredTeams.map((team, teamIndex) => (
                            <div key={teamIndex} className='team bg-[#344A70] p-4'>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div style={{ fontFamily: 'Bebas Neue' }} className='font-bebas-neue font-bold text-2xl'>Team Name: {team.teamName}</div>
                                        <div style={{ fontFamily: 'Bebas Neue' }} className='font-bebas-neue font-bold text-2xl'>Team Tag: {team.teamTag}</div>
                                    </div>
                                    <div>
                                        <button
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded mr-2"
                                            onClick={() => handleEditTeamClick(team)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                                            onClick={() => handleDeleteTeam(team._id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                <hr className='bg-white h-[2px] border-none mt-2 mb-4' />
                                {[...Array(7)].map((_, playerIndex) => (
                                    team[`player_${playerIndex + 1}`] && (
                                        <div key={playerIndex} className="flex justify-between items-center">
                                            <div style={{ fontFamily: 'Bebas Neue' }} className='font-bebas-neue font-bold text-2xl'>
                                                Player {playerIndex + 1}: {team[`player_${playerIndex + 1}`].name}
                                            </div>
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-5 w-5 text-gray-600"
                                                checked={team[`player_${playerIndex + 1}`].status}
                                                onChange={() => handleCheckboxChange(teamIndex, playerIndex)}
                                            />
                                        </div>
                                    )
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddTeam;

