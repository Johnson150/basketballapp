"use client"
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import axios from 'axios';

const EditPlayer = ({ player, showModal, setShowModal }) => {
    const [input, setInput] = useState({
        name: '',
        team: '',
        MPG: '',
        PPG: '',
        RPG: '',
        APG: '',
        SPG: '',
        BPG: ''
    });

    // Populate form with existing player data
    useEffect(() => {
        if (player) setInput({
            ...player,
            MPG: player.MPG?.toString(), // Ensure numbers are converted to strings for input fields
            PPG: player.PPG?.toString(),
            RPG: player.RPG?.toString(),
            APG: player.APG?.toString(),
            SPG: player.SPG?.toString(),
            BPG: player.BPG?.toString(),
        });
    }, [player]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const isNumericField = ['MPG', 'PPG', 'RPG', 'APG', 'SPG', 'BPG'].includes(name);
        setInput(prevState => ({
            ...prevState,
            [name]: isNumericField ? parseFloat(value) : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/player/${player.id}`, input)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setInput({});
                setShowModal(false);
                window.location.reload();
            });
    };

    return (
        <div>
            <button
                onClick={() => setShowModal(true)}
                className="bg-blue-700 text-white p-3 cursor-pointer">
                Edit Player
            </button>
            {showModal && (
                <Modal showModal={showModal} setShowModal={setShowModal}>
                    <form className="w-full px-5 pb-6" onSubmit={handleSubmit}>
                        <h1>Edit Player</h1>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            className="w-full p-2 mb-3"
                            value={input.name || ''}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Team"
                            name="team"
                            className="w-full p-2 mb-3"
                            value={input.team || ''}
                            onChange={handleChange}
                        />
                        {/* Additional fields for player statistics */}
                        <input
                            type="number"
                            placeholder="MPG"
                            name="MPG"
                            className="w-full p-2 mb-3"
                            value={input.MPG || ''}
                            onChange={handleChange}
                            step="0.1"
                        />
                        <input
                            type="number"
                            placeholder="PPG"
                            name="PPG"
                            className="w-full p-2 mb-3"
                            value={input.PPG || ''}
                            onChange={handleChange}
                            step="0.1"
                        />
                        <input
                            type="number"
                            placeholder="RPG"
                            name="RPG"
                            className="w-full p-2 mb-3"
                            value={input.RPG || ''}
                            onChange={handleChange}
                            step="0.1"
                        />
                        <input
                            type="number"
                            placeholder="APG"
                            name="APG"
                            className="w-full p-2 mb-3"
                            value={input.APG || ''}
                            onChange={handleChange}
                            step="0.1"
                        />
                        <input
                            type="number"
                            placeholder="SPG"
                            name="SPG"
                            className="w-full p-2 mb-3"
                            value={input.SPG || ''}
                            onChange={handleChange}
                            step="0.1"
                        />
                        <input
                            type="number"
                            placeholder="BPG"
                            name="BPG"
                            className="w-full p-2 mb-3"
                            value={input.BPG || ''}
                            onChange={handleChange}
                            step="0.1"
                        />
                        <button type="submit" className="bg-blue-700 text-white px-5 py-2">
                            Save Changes
                        </button>
                    </form>
                </Modal>
            )}
        </div>
    );
};

export default EditPlayer;
