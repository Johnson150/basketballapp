// Player.js (Updated with the EditPlayerForm component)
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import axios from "axios";
import { useRouter } from "next/router";
import EditPlayerForm from './EditPlayerForm'; // Make sure to import the EditPlayerForm

const Player = ({ player, onPlayerUpdate, onPlayerDelete }) => {
    const router = useRouter();
    const [showEditModal, setShowEditModal] = useState(false);
    const [playerToEdit, setPlayerToEdit] = useState({ ...player });
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setError(''); // Reset error when player changes
    }, [player]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlayerToEdit(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.patch(`/api/player/${player.id}`, playerToEdit);
            if (onPlayerUpdate) onPlayerUpdate(player.id, playerToEdit);
            setShowEditModal(false);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'An error occurred while updating the player.');
        }
    };

    const handleDeletePlayer = async () => {
        try {
            await axios.delete(`/api/player/${id}`);
            if (onPlayerDelete) onPlayerDelete(player.id);
            setShowDeleteModal(false);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'An error occurred while deleting the player.');
        }
    };

    return (
        <li className="p-3 my-5 bg-slate-300">
            <h1>{player.name}</h1>
            <p>{player.team}</p>
            {error && <p className="text-red-500">{error}</p>}
            <div>
                <button onClick={() => setShowEditModal(true)} className="bg-green-600 text-white mr-2" style={{ width: '80px' }}>Edit</button>
                <button onClick={() => setShowDeleteModal(true)} className="bg-red-600 text-white" style={{ width: '80px' }}>Delete</button>
            </div>
            {showEditModal && (
                <Modal showModal={showEditModal} setShowModal={setShowEditModal}>
                    <EditPlayerForm player={playerToEdit} onChange={handleChange} onSubmit={handleEditSubmit} />
                </Modal>
            )}
            {showDeleteModal && (
                <Modal showModal={showDeleteModal} setShowModal={setShowDeleteModal}>
                    <div>
                        <p className="text-lg text-grey-600 font-semibold my-2">Are you sure you want to delete this player?</p>
                        <button onClick={handleDeletePlayer} className="bg-red-700 text-white mr-2 font-bold">Yes</button>
                        <button onClick={() => setShowDeleteModal(false)} className="bg-blue-800 text-white font-bold">No</button>
                    </div>
                </Modal>
            )}
        </li>
    );
};

export default Player;
