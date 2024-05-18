// EditPlayerForm.js
const EditPlayerForm = ({ player, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="w-full px-5 pb-6">
            {/* Name and Team input fields */}
            <input type="text" placeholder="Name" name="name" className="w-full p-2 mb-3" value={player.name || ''} onChange={onChange} />
            <input type="text" placeholder="Team" name="team" className="w-full p-2 mb-3" value={player.team || ''} onChange={onChange} />

            {/* Statistical data inputs */}
            {['MPG', 'PPG', 'RPG', 'APG', 'SPG', 'BPG', 'FG', 'FGA', 'FGPercent', 'threeP', 'threePA', 'threePPercent', 'twoP', 'twoPA', 'twoPPercent', 'eFGPercent', 'FT', 'FTA', 'FTPercent', 'ORB', 'DRB', 'TRB', 'AST', 'STL', 'BLK', 'TOV', 'PF', 'PTS'].map(stat => (
                <input key={stat} type="number" placeholder={stat} name={stat} className="w-full p-2 mb-3" value={player[stat] || ''} onChange={onChange} step="0.1" />
            ))}
            <button type="submit" className="bg-blue-700 text-white px-5 py-2">Update Player</button>
        </form>
    );
};

export default EditPlayerForm;