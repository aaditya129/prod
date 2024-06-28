import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import AddButton from '../AddButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const GroupMain = () => {
    const { tournamentId } = useParams();
    const [groupStages, setGroupStages] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editGroupStage, setEditGroupStage] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [formValues, setFormValues] = useState({ title: '', total_matches: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchGroupStages = useCallback(async () => {
        if (!tournamentId) return;
        try {
            const response = await axios.get(`http://143.198.107.248/api/groupstages/fetchallgroups/${tournamentId}`);
            setGroupStages(response.data);
        } catch (error) {
            console.error('Error fetching group stages:', error);
        }
    }, [tournamentId]);

    useEffect(() => {
        fetchGroupStages();
    }, [fetchGroupStages]);

    const handleAddGroupStageClick = () => {
        setEditGroupStage(null);
        setFormValues({ title: '', total_matches: '' });
        setShowForm(true);
    };

    const handleEditGroupStageClick = (groupStage) => {
        setEditGroupStage(groupStage);
        setFormValues({ title: groupStage.title, total_matches: groupStage.total_matches });
        setShowForm(true);
    };

    const handleDeleteGroupStage = async (groupId) => {
        if (window.confirm('Are you sure you want to delete this group stage?')) {
            try {
                await axios.delete(`http://143.198.107.248/api/groupstages/deletegroupstage/${groupId}`);
                setGroupStages(groupStages.filter(group => group._id !== groupId));
                toast.success('Group stage deleted successfully!');
            } catch (error) {
                console.error('Error deleting group stage:', error);
                toast.error('Failed to delete group stage. Please try again.');
            }
        }
    };

    const handleFormClose = () => {
        setShowForm(false);
        setEditGroupStage(null);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const newGroupStage = {
            title: formValues.title,
            total_matches: formValues.total_matches,
            tournament_id: tournamentId,
        };

        try {
            if (editGroupStage) {
                const response = await axios.put(`http://143.198.107.248/api/groupstages/updategroupstage/${editGroupStage._id}`, newGroupStage);
                setGroupStages(groupStages.map(group => (group._id === editGroupStage._id ? response.data : group)));
                toast.success('Group stage successfully updated!');
            } else {
                const response = await axios.post('http://143.198.107.248/api/groupstages/creategroupstage', newGroupStage);
                setGroupStages([...groupStages, response.data]);
                toast.success('Group stage successfully added!');
            }
            setShowForm(false);
            setEditGroupStage(null);
        } catch (error) {
            console.error('Error submitting group stage:', error);
            toast.error('Failed to submit group stage. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const filteredGroupStages = groupStages.filter(groupStage =>
        groupStage.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <>
            <ToastContainer />
            <AddButton text="Add Group Stage" onClick={handleAddGroupStageClick} />
            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white rounded-lg p-8 w-full max-w-3xl h-3/4 overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4">{editGroupStage ? 'Edit Group Stage' : 'Add New Group Stage'}</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="title">Title:</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={formValues.title}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="total_matches">Total Matches:</label>
                                <input
                                    type="number"
                                    id="total_matches"
                                    name="total_matches"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    value={formValues.total_matches}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            {!editGroupStage && (
                                <input
                                    type="hidden"
                                    id="tournament_id"
                                    name="tournament_id"
                                    value={tournamentId}
                                    readOnly
                                />
                            )}
                            <div className="flex justify-end">
                                <button type="button" className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded mr-2" onClick={handleFormClose}>Cancel</button>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : editGroupStage ? 'Update' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <div className={`mt-2 ${groupStages.length < 3 ? 'min-h-screen' : 'h-auto'} bg-slate-700`}>
                <div className="max-w-9xl mx-auto px-4 py-8">
                    <input
                        type="text"
                        placeholder="Search by Title..."
                        className="w-full max-w-lg p-2 mb-4 border border-gray-300 rounded"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {filteredGroupStages.map((groupStage, index) => (
                            <div key={index} className='team bg-[#344A70] p-4'>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <Link to={`/groupstage/${groupStage._id}`} style={{ fontFamily: 'Bebas Neue' }} className='font-bebas-neue font-bold text-2xl'>{groupStage.title}</Link>
                                        <div style={{ fontFamily: 'Bebas Neue' }} className='font-bebas-neue font-bold text-2xl'>Total Matches: {groupStage.total_matches}</div>
                                    </div>
                                    <div>
                                        <button
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded mr-2"
                                            onClick={() => handleEditGroupStageClick(groupStage)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                                            onClick={() => handleDeleteGroupStage(groupStage._id)}
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

export default GroupMain;
