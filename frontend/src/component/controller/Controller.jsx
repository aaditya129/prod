import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Controller = () => {
    const [tournaments, setTournaments] = useState([]);
    const [groups, setGroups] = useState({});
    const [matches, setMatches] = useState({});
    const [selectedGroups, setSelectedGroups] = useState({});
    const [selectedMatches, setSelectedMatches] = useState({});
    const [selectedDisplayField, setSelectedDisplayField] = useState(''); // State to store selected display field
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch all tournaments from the API
        axios.get('http://143.198.107.248/api/tournaments/fetchalltournaments')
            .then(response => {
                setTournaments(response.data);
            })
            .catch(error => console.error('Error fetching tournaments:', error));
    }, []);

    const fetchGroups = (tournamentId) => {
        if (!groups[tournamentId]) {
            // Fetch groups for a specific tournament
            axios.get(`http://143.198.107.248/api/groupstages/fetchallgroups/${tournamentId}`)
                .then(response => {
                    const newGroups = {
                        ...groups,
                        [tournamentId]: response.data
                    };
                    setGroups(newGroups);
                })
                .catch(error => console.error(`Error fetching groups for tournament ${tournamentId}:`, error));
        }
    };

    const fetchMatches = (groupId) => {
        if (!matches[groupId]) {
            // Fetch matches for a specific group
            axios.get(`http://143.198.107.248/api/matches/fetchallmatches/${groupId}`)
                .then(response => {
                    const newMatches = {
                        ...matches,
                        [groupId]: response.data
                    };
                    setMatches(newMatches);
                })
                .catch(error => console.error(`Error fetching matches for group ${groupId}:`, error));
        }
    };

    const handleGroupChange = (e, tournamentId) => {
        const groupId = e.target.value;
        setSelectedGroups({
            ...selectedGroups,
            [tournamentId]: groupId
        });
        setSelectedMatches({
            ...selectedMatches,
            [tournamentId]: '' // Clear selected match when group changes
        });
        fetchMatches(groupId);
    };

    const handleMatchChange = (e, tournamentId) => {
        const matchId = e.target.value;
        setSelectedMatches({
            ...selectedMatches,
            [tournamentId]: matchId
        });
    };

    const navigateToResult = async (tournamentId) => {
        const groupId = selectedGroups[tournamentId];
        const matchId = selectedMatches[tournamentId];

        if (!groupId || !matchId) {
            toast.error('Please select both Group and Match before proceeding.');
            return;
        }

        try {
            await axios.put(`http://143.198.107.248/api/matchrecord/${tournamentId}/${groupId}/${matchId}`);
            navigate(`/display/${tournamentId}`);
        } catch (error) {
            console.error('Error updating match record:', error);
            // Handle error as needed
        }
    };
    const navigateToAlive = (tournamentId) => {
        window.open(`/alive/${tournamentId}`, '_blank');
    };
    
    const navigateToBanner = (tournamentId) => {
        window.open(`/banner/${tournamentId}`, '_blank');
    };
    
    const navigateToMalert = (tournamentId) => {
        window.open(`/matchalert/${tournamentId}`, '_blank');
    };
    
    const navigateToalert = (tournamentId) => {
        window.open(`/alert/${tournamentId}`, '_blank');
    };
    

    const handleSelectDisplayChange = async (e, tournamentId) => {
        const fieldName = e.target.value;

        try {
            await axios.put(`http://143.198.107.248/api/selectdisplay/${tournamentId}`, {
                [fieldName]: true
            });
            toast.success(`Updated ${fieldName} successfully.`);
        } catch (error) {
            console.error(`Error updating ${fieldName}:`, error);
            toast.error(`Failed to update ${fieldName}.`);
        }
    };

    return (
        <div className="bg-slate-600 p-4 m-5 rounded">
            {tournaments.map((tournament, index) => (
                <div key={index} className="mb-4 flex items-center">
                    <h2 className="text-white text-xl w-1/4">{tournament.name}</h2>
                    <div className="w-1/4 mr-3">
                        <h3 className="mb-2 text-white">Group</h3>
                        <select
                            className="w-full p-2 border border-gray-300 rounded"
                            onFocus={() => fetchGroups(tournament._id)}
                            onChange={(e) => handleGroupChange(e, tournament._id)}
                        >
                            <option value="">Select Group</option>
                            {(groups[tournament._id] || []).map((group, idx) => (
                                <option key={idx} value={group._id}>{group.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="w-1/4">
                        <h3 className="mb-2 text-white">Match</h3>
                        <select
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={(e) => handleMatchChange(e, tournament._id)}
                        >
                            <option value="">Select Match</option>
                            {(matches[selectedGroups[tournament._id]] || []).map((match, idx) => (
                                <option key={idx} value={match._id}>{match.match_no}</option>
                            ))}
                        </select>
                    </div>
                    <div className="w-2/4 flex justify-around">
                        <button
                            className="bg-blue-500 text-white p-2 rounded"
                            onClick={() => navigateToResult(tournament._id)}
                        >
                            Result
                        </button>
                        <button
                            className="bg-green-500 text-white p-2 rounded"
                            onClick={() => navigateToAlive(tournament._id)}
                        >
                            Alive
                        </button>
                        <button
                            className="bg-red-500 text-white p-2 rounded"
                            onClick={() => navigateToBanner(tournament._id)}
                        >
                            Banner
                        </button>
                        <button
                            className="bg-red-500 text-white p-2 rounded"
                            onClick={() => navigateToMalert(tournament._id)}
                        >
                           Game Intro
                        </button>
                        <button
                            className="bg-red-500 text-white p-2 rounded"
                            onClick={() => navigateToalert(tournament._id)}
                        >
                            Alert
                        </button>
                        <div className="relative">
                            <select
                                className="bg-gray-300 text-gray-900 p-2 rounded"
                                onChange={(e) => handleSelectDisplayChange(e, tournament._id)}
                            >
                                <option value="">Select Display</option>
                                <option value="WwcdAlert">Wwcd Alert</option>
                                <option value="Wwcd">Wwcd</option>
                                <option value="mvp">MVP</option>
                                <option value="topGrager">Top Gragger</option>
                                <option value="matchStanding">Match Standing</option>
                                <option value="overallStanding">Overall Standing</option>
                                <option value="overallFragger">Overall Fragger</option>
                            </select>
                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                &#9660;
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            <ToastContainer /> {/* Ensure ToastContainer is rendered here */}
        </div>
    );
};

export default Controller;
