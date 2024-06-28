import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Alert = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showP2, setShowP2] = useState(false);
    const { tournamentId } = useParams();
    const [teams, setTeams] = useState([]);
    const [primaryColor, setPrimaryColor] = useState("");
    const [secondaryColor, setSecondaryColor] = useState("");
    const [tournament, setTournament] = useState(null);
    const [teamUpdated, setTeamUpdated] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://143.198.107.248/api/matchrecord/alive/${tournamentId}`
                );
                const newTeams = response.data.currentDeadTeam;
                setPrimaryColor(response.data.tournament.primaryColor);
                setSecondaryColor(response.data.tournament.secondaryColor);
                setTournament(response.data.tournament);

                // Check if newTeams is different from current teams
                if (JSON.stringify(newTeams) !== JSON.stringify(teams)) {
                    setTeams(newTeams);
                    setIsVisible(true); // Show the alert when teams are updated
                    setTeamUpdated(true); // Mark the team as updated
                }

                console.log(response.data.currentDeadTeam);
            } catch (err) {
                console.log("Error fetching data:", err);
            }
        };

        // Fetch data initially
        fetchData();

        // Set interval to fetch data every second
        const intervalId = setInterval(fetchData, 1000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, [tournamentId, teams]); // Include teams in dependencies to monitor changes

    useEffect(() => {
        // Set a timeout to hide the alert after 5 seconds when it's visible
        if (isVisible) {
            const timeoutId = setTimeout(() => {
                setIsVisible(false);
                setShowP2(false); // Reset showP2 when alert is hidden
            }, 7000);

            return () => clearTimeout(timeoutId);
        }
    }, [isVisible]);

    useEffect(() => {
        if (teamUpdated) {
            const p2TimeoutId = setTimeout(() => {
                setShowP2(true);
                setTeamUpdated(false);
              // Reset the team updated flag
            }, 4000);

            return () => clearTimeout(p2TimeoutId);
        }
    }, [teamUpdated]);


    return (
        <>
            {isVisible &&  (
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`Group7 flex flex-col justify-center items-center mt-[8.5rem]`}
                >
                    {
                        teams && (
                            <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="Rectangle57 flex"
                            style={{
                                width: "552px",
                                height: "184px",
                                background: `url(https://res.cloudinary.com/drs0qtuhd/image/upload/v1717781565/dada_5_b1grhu.png),linear-gradient(180deg, ${secondaryColor} 0%, ${primaryColor} 100%)`,
                                backgroundBlendMode: "overlay",
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="Rectangle55 flex items-center justify-center relative top-2"
                                style={{
                                    width: 227,
                                    height: 180,
                                    background: "linear-gradient(180deg, white 0%, #999999 100%)",
                                }}
                            >
    
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="HoraaEsportsLightmode2"
                                    style={{ width: 165, height: 162 }}
                                    src={teams.teamLogo}
                                    alt="Team Logo"
                                />
                            </motion.div>
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                    className="Eliminated ml-2"
                                    style={{
                                        width: 316,
                                        height: 95,
                                        textAlign: "center",
                                        color: "white",
                                        fontSize: 100,
                                        fontFamily: "Tungsten",
                                        fontWeight: "600",
                                        wordWrap: "break-word",
                                    }}
                                >
                                    ELIMINATED
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1.2 }}
                                    className="Rectangle57"
                                    style={{
                                        width: 320,
                                        height: 45,
                                        right: -5,
                                        top: 36,
                                        position: "relative",
                                        background: "white",
                                    }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 1.4 }}
                                        className="HoraEsports relative -top-[15px]"
                                        style={{
                                            width: 308,
                                            height: 47,
                                            textAlign: "center",
                                            color: primaryColor,
                                            fontSize: 51,
                                            fontFamily: "Tungsten",
                                            fontWeight: "400",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        {teams.teamName}
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>
                        )
                    }
                  
                    {showP2 && (
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.6 }}
                            className="P2 -top-[184px]"
                            style={{
                                position: "relative",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                width: "552px",
                                height: "184px",
                                alignItems: "flex-start",
                                display: "flex",
                            }}
                        >
                            <div
                                className="Rectangle54 flex items-center"
                                style={{
                                    width: 552,
                                    height: 184,
                                    background: "linear-gradient(0deg, white 0%, white 100%), linear-gradient(0deg, white 0%, white 100%), linear-gradient(0deg, white 0%, white 100%)",
                                }}
                            >
                                <div
                                    className="Rectangle56 flex justify-center items-center"
                                    style={{
                                        width: 552,
                                        height: 170,
                                        backgroundImage: `linear-gradient(to bottom right, ${secondaryColor}, ${primaryColor})`,
                                    }}
                                >
                                    {tournament && (
                                        <img
                                            className="Logo2"
                                            style={{ width: 249, height: 131 }}
                                            src={tournament.url}
                                            alt="Tournament Logo"
                                        />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            )}
        </>
    );
};

export default Alert;
