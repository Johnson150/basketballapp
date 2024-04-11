"use client"
import React, { useState } from "react";
import Modal from "./Modal";
import axios from "axios";

const Addplayer = () => {
    const [showModal, setShowModal] = useState(false);
    const [input, setInput] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/post", input)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setInput({});
                setShowModal(false);
            });
    };

    return (
        <div>
            <button
                onClick={() => setShowModal(true)}
                className="bg-blue-700 text-white p-3 cursor-pointer"
            >
                Add New Player
            </button>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <form className="w-full px-5 pb-6" onSubmit={handleSubmit}>
                    <h1>Add a New Player</h1>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="w-full p-2 mb-3"
                        value={input.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Team"
                        name="team"
                        className="w-full p-2 mb-3"
                        value={input.team}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="MPG"
                        name="MPG"
                        className="w-full p-2 mb-3"
                        value={input.MPG}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="PPG"
                        name="PPG"
                        className="w-full p-2 mb-3"
                        value={input.PPG}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="RPG"
                        name="RPG"
                        className="w-full p-2 mb-3"
                        value={input.RPG}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="APG"
                        name="APG"
                        className="w-full p-2 mb-3"
                        value={input.APG}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="SPG"
                        name="SPG"
                        className="w-full p-2 mb-3"
                        value={input.SPG}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="BPG"
                        name="BPG"
                        className="w-full p-2 mb-3"
                        value={input.BPG}
                        onChange={handleChange}
                    />
                    <button type="submit" className="bg-blue-700 text-white px-5 py-2">
                        Submit
                    </button>
                </form>
            </Modal>
        </div>
    );
};

export default Addplayer;
