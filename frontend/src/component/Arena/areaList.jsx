import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Counter from './counter';
import TotalList from './totalList';

const AreaList = ({ matchId }) => {
    const [matchData, setMatchData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeSlotIndex, setActiveSlotIndex] = useState(null); // State to track active slot index

    const fetchMatchData = async () => {
        try {
            const response = await axios.get(`http://143.198.107.248/api/matchdata/${matchId}`);
            setMatchData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching match data:', error);
        }
    };

    useEffect(() => {
        fetchMatchData();
    }, [matchId]);

    const updatePlayerKills = (teamIndex, playerIndex, newKills) => {
        setMatchData(prevMatchData => {
            const updatedMatchData = [...prevMatchData];
            updatedMatchData[teamIndex][`player_${playerIndex + 1}`].kills = newKills;
            return updatedMatchData;
        });
    };

    const calculateTotalKills = (team) => {
        let totalKills = 0;
        for (let i = 1; i <= 5; i++) {
            if (team[`player_${i}`]) {
                totalKills += team[`player_${i}`].kills;
            }
        }
        return totalKills;
    };

    const handlePositionChange = async (event, teamIndex) => {
        const newPosition = event.target.value;

        try {
            const response = await axios.put(`http://143.198.107.248/api/matchdata/updateteamposition/${matchId}/${matchData[teamIndex]?._id}`, {
                position: newPosition
            });

            if (response.status === 200) {
                fetchMatchData(); // Refresh match data if position update succeeds
            } else {
                console.error('Failed to update team position');
            }
        } catch (error) {
            console.error('Error updating team position:', error);
        }
    };

    const scrollToSlot = (slotIndex) => {
        setActiveSlotIndex(slotIndex); // Set active slot index for highlighting
        const element = document.getElementById(`team-slot-${slotIndex}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="mt-2 min-h-screen bg-slate-700 text-white relative">
            <div className="max-w-9xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">Match Data</h2>
                <div className="sticky top-0 bg-slate-700 z-10">
                    <input
                        type="text"
                        className="mb-4 p-2 border text-black border-gray-300 rounded"
                        placeholder="Search teams by tag"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="flex space-x-4 mb-4">
                        {matchData.map((team, index) => (
                            <button
                                key={team._id}
                                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${activeSlotIndex === index ? 'bg-blue-700' : ''}`}
                                onClick={() => scrollToSlot(index)}
                            >
                                Slot {index + 3}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {matchData.map((team, originalIndex) => {
                        // Apply filter condition here
                        if (!team.teamTag.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return null; // Skip rendering if team doesn't match filter
                        }
                        const teamIndex = matchData.findIndex(t => t._id === team._id); // Get current index in matchData array
                        return (
                            <div
                                key={team._id}
                                id={`team-slot-${teamIndex}`}
                                className={`team bg-[#344A70] p-4 ${activeSlotIndex === teamIndex ? 'border border-yellow-400' : ''}`}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div style={{ fontFamily: 'Bebas Neue' }} className='font-bebas-neue font-bold text-2xl'>SLOT {teamIndex + 3}</div>
                                        <div style={{ fontFamily: 'Bebas Neue' }} className='font-bebas-neue font-bold text-2xl'>Team Name: {team.teamName}</div>
                                        <div style={{ fontFamily: 'Bebas Neue' }} className='font-bebas-neue font-bold text-2xl'>Team Tag: {team.teamTag}</div>
                                    </div>
                                    <input
                                        style={{ fontFamily: 'Bebas Neue' }}
                                        type="text"
                                        placeholder="#"
                                        value={team.position == 0 ? "" : team.position}
                                        onChange={(event) => handlePositionChange(event, teamIndex)}
                                        className="ml-4 w-10 text-center border text-black border-gray-400 px-2 py-1 rounded"
                                    />
                                </div>
                                <hr className='bg-white h-[2px] border-none mt-2 mb-4' />
                                {[...Array(5)].map((_, playerIndex) => (
                                    team[`player_${playerIndex + 1}`] && (
                                        <div key={playerIndex} className="flex justify-between items-center mb-2">
                                            <div style={{ fontFamily: 'Bebas Neue' }} className='font-bebas-neue font-bold text-2xl'>
                                                Player {playerIndex + 1}: {team[`player_${playerIndex + 1}`].name}
                                            </div>
                                            <div>
                                                <Counter
                                                    matchId={matchId}
                                                    playerId={team[`player_${playerIndex + 1}`]._id}
                                                    kills={team[`player_${playerIndex + 1}`].kills || 0} // Ensure kills are initialized to 0 if undefined
                                                    status={team[`player_${playerIndex + 1}`].status}
                                                    onKillChange={(newKills) => updatePlayerKills(teamIndex, playerIndex, newKills)}
                                                />
                                            </div>
                                        </div>
                                    )
                                ))}
                                <hr className='bg-white h-[2px] border-none mt-2 mb-4' />
                                {team._id && (
                                    <TotalList
                                        matchId={matchId}
                                        teamId={team._id}
                                        totalkills={calculateTotalKills(team)}
                                        totalpoints={team.totalpoints}
                                        rankpoint={team.rankpoint}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AreaList;
