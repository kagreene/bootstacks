import sequelize from '../config/connection.js';
import { VolunteerFactory } from './User.js';
import { WorkFactory } from './Game.js';

    const Volunteer = VolunteerFactory(sequelize);
    const Work = WorkFactory(sequelize);

    Volunteer.hasMany(Work, { foreignKey: 'assignedVolunteerId'});
    Work.belongsTo(Volunteer, { foreignKey: 'assignedVolunteerId', as: 'assignedVolunteer'});

export { Volunteer, Work };
