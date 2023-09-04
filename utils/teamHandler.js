const Team = require('../models/Team');

const createTeam = async (data) => {
    try {
        const team = new Team(data);
        await team.save();
        return team;
    } catch (error) {
        console.error('Error creating team', error);
        throw error;
    }
};

module.exports = createTeam;
