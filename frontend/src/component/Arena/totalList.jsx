import React, { useEffect } from 'react';
import axios from 'axios';

const TotalList = ({ totalkills, totalpoints, rankpoint, matchId, teamId }) => {
  useEffect(() => {
    const updateTeamStats = async () => {
      try {
        const response = await axios.put(`http://143.198.107.248/api/matchdata/updateteamstats/${matchId}/${teamId}`, {
          totalkills,
          totalpoints: totalkills + rankpoint // Updating total points as well
        });
        console.log('Update response:', response.data);
      } catch (error) {
        console.error('Error updating team stats:', error);
      }
    };

    updateTeamStats();
  }, [totalkills]);

  return (
    <div className='flex flex-col justify-center items-center space-y-2'>
      <div style={{ fontFamily: 'Bebas Neue' }} className='font-bebas-neue font-bold text-2xl ml-[5.5rem]'>
        TOTAL KILL: {totalkills}
      </div>
      <div style={{ fontFamily: 'Bebas Neue' }} className='font-bebas-neue font-bold text-2xl ml-[5.5rem]'>
        RANK POINT: {rankpoint}
      </div>
      <div style={{ fontFamily: 'Bebas Neue' }} className='font-bebas-neue font-bold text-2xl ml-[5.5rem]'>
        TOTAL POINT: {totalkills + rankpoint}
      </div>
    </div>
  );
};

export default TotalList;
