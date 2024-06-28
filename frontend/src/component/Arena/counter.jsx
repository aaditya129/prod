import React, { useState, useEffect } from "react";
import axios from 'axios';

const Counter = ({ matchId, playerId, kills, status, onKillChange }) => {
  const [count, setCount] = useState(kills);
  const [isChecked, setIsChecked] = useState(status);

  useEffect(() => {
    const updatePlayerData = async () => {
      try {
        // console.log(matchId,playerId)
        await axios.put(`http://143.198.107.248/api/matchdata/updatematchplayer/${matchId}/${playerId}`, {
          kills: count,
          status: isChecked
        });
      } catch (error) {
        console.error('Error updating player data:', error);
      }
    };

    updatePlayerData();
  }, [count, isChecked]);

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (onKillChange) onKillChange(newCount); // Call onKillChange if it's provided
  };

  const decreaseCount = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      if (onKillChange) onKillChange(newCount); // Call onKillChange if it's provided
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-row items-center justify-center space-x-2">
      {isChecked ? (
        <div className="flex items-center justify-center h-auto my-1 bg-gray-100  rounded">
          <span style={{ fontFamily: 'Bebas Neue' }} className="text-red-500 font-bold w-[164px] h-[40px] text-center text-4xl">Player DEAD</span>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center h-auto my-1 bg-gray-100">
          <div className="flex space-x-4 mx-1 justify-center items-center">
            <button
              onClick={decreaseCount}
              disabled={count === 0}
              className={`px-4 my-1 py-2 bg-red-500 text-white text-sm font-bold rounded ${count === 0 ? 'disabled:bg-red-300' : ''}`}
            >
              -
            </button>
            <div className="text-xl mt-1 font-bold text-black">{count}</div>
            <button
              onClick={increaseCount}
              className="px-4 my-1 py-2 bg-green-500 text-white text-sm font-bold rounded"
            >
              +
            </button>
          </div>
        </div>
      )}
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
      </div>
    </div>
  );
};

export default Counter;
