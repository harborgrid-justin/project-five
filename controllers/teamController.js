const Team = require('../models/Team');

exports.getTeamMembers = async (req, res) => {
    try {
        const team = await Team.findById(req.params.teamId).populate('members');
        res.status(200).json(team.members);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching team members' });
    }
};
