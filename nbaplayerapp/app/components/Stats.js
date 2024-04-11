import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import { useRouter } from "next/router";

const Stats = ({ stats, onDelete }) => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [statsToEdit, setStatsToEdit] = useState(stats);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStatsToEdit((prevState) => ({
            ...prevState,
            [name]: name === "actors" ? value.split(",") : name === "releaseYear" ? parseInt(value) : value,
        }));
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        axios
            .patch(`/api/stats/${stats.id}`, statsToEdit)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setStatsToEdit({});
                setShowModal(false);
                router.reload(); // Assuming you're using Next.js, refresh the page after editing
            });
    };

    const handleDeleteStats = (id) => {
        axios
            .delete(`/api/stats/${id}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setShowDeleteModal(false);
                router.reload(); // Assuming you're using Next.js, refresh the page after deleting
            });
    };

    return (
        <li className="p-3 my-5 bg-slate-400" key={stats.id}>
            <h1>{stats.Player}</h1>
            <p>{stats.Pos}</p>
            <p>{stats.Age}</p>
            <div>
                <button onClick={() => setShowModal(true)} className="bg-green-600 text-white mr-2" style={{ width: "80px" }}>
                    Edit
                </button>
                <button onClick={() => setShowDeleteModal(true)} className="bg-red-600 text-white" style={{ width: "80px" }}>
                    Delete
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <form className="w-full px-5 pb-6" onSubmit={handleEditSubmit}>
                    <h1 className="mb-2 text-2xl">Edit Stats</h1>
                    <input
                        type="text"
                        placeholder="Player"
                        name="Player"
                        className="w-full p-2 mb-3"
                        value={statsToEdit.Player}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Position"
                        name="Pos"
                        className="w-full p-2 mb-3"
                        value={statsToEdit.Pos}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        name="Age"
                        className="w-full p-2 mb-3"
                        value={statsToEdit.Age}
                        onChange={handleChange}
                    />

                    <button type="submit" className="bg-blue-700 text-white px-5 py-2">
                        Update Stats
                    </button>
                </form>
            </Modal>
        </li>
    );
};

export default Stats;
