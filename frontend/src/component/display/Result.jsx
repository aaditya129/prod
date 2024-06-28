import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import WwcdAlert from '../design/WwcdAlert';
import First from '../design/First';
import { motion } from 'framer-motion';
import Mvp from '../design/Mvp';
import MatchStanding from '../design/MatchStanding';
import OverallStanding from '../design/OverallStanding';
import Topfragger from '../design/Topfragger';
import Overallfragger from '../design/Overallfragger';

const Result = () => {
    const { tournamentId } = useParams();
    const [data, setData] = useState(null);
    const [Tourn, setTourn] = useState(null);
    const [Wwcd, setWwcd] = useState([]);
    const [Group, setGroup] = useState(null);
    const [Match, setMatch] = useState(null);
    const [Matchmvp, setMatchmvp] = useState(null);
    const [loading, setLoading] = useState(true);
    const [matchData, setMatchData] = useState(null);
    const [overall, setOverall] = useState(null);
    const [error, setError] = useState(null);
    const [topfragger, setTopfragger] = useState([]);
    const [overallfragger, setOverallfragger] = useState(null);
    const [selectedDisplay, setSelectedDisplay] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://143.198.107.248/api/matchrecord/${tournamentId}`);
                console.log(response.data);
                setWwcd(response.data.position1Team);
                setGroup(response.data.groupstage);
                setMatch(response.data.match);
                setMatchmvp(response.data.topPlayers[0]);
                setData(response.data);
                setTopfragger(response.data.topPlayers);
                setTourn(response.data.tournament);
                setOverall(response.data.overallData.teams);
                setMatchData(response.data.sortedTeams.slice(1));
                setOverallfragger(response.data.overallData.players);

                setLoading(false);
            } catch (err) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 1000);

        return () => clearInterval(intervalId);
    }, [tournamentId]);

    useEffect(() => {
        const fetchSelectedDisplay = async () => {
            try {
                const response = await axios.get(`http://143.198.107.248/api/selectdisplay/${tournamentId}`);
                console.log(response.data);
                setSelectedDisplay(response.data);
            } catch (err) {
                console.error('Error fetching selected display data:', err);
            }
        };

        fetchSelectedDisplay();
        const intervalId = setInterval(fetchSelectedDisplay, 1000);

        return () => clearInterval(intervalId);
    }, [tournamentId]);

    if (loading) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-screen h-screen flex justify-center items-center"
            >
                <img src="https://res.cloudinary.com/drs0qtuhd/image/upload/v1719090572/Power-Play-Logo-Design-Png_e4xdqq.png" alt="Loading..." />
            </motion.div>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            {selectedDisplay.WwcdAlert && <WwcdAlert Wwcd={Wwcd} Tourn={Tourn} />}
            {selectedDisplay.Wwcd && <First Group={Group} Match={Match} Tourn={Tourn} Wwcd={Wwcd} />}
            {selectedDisplay.mvp && <Mvp Group={Group} Match={Match} Tourn={Tourn} Matchmvp={Matchmvp} />}
            {selectedDisplay.matchStanding && <MatchStanding Group={Group} Match={Match} Tourn={Tourn} Wwcd={Wwcd} matchData={matchData} />}
            {selectedDisplay.overallStanding && <OverallStanding Group={Group} Match={Match} Tourn={Tourn} overall={overall} />}
            {selectedDisplay.topGrager && <Topfragger Group={Group} Match={Match} Tourn={Tourn} topfragger={topfragger} />}
            {selectedDisplay.overallFragger && <Overallfragger Group={Group} Match={Match} Tourn={Tourn} topfragger={overallfragger} />}
        </>
    );
};

export default Result;
