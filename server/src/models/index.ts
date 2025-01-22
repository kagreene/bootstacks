import sequelize from '../config/connection.js';
import { VolunteerFactory } from './volunteer.js';
import { WorkFactory } from './work.js';
import { UserFactory } from './user.js';


    const Volunteer = VolunteerFactory(sequelize);
    const Work = WorkFactory(sequelize);
    const User = UserFactory(sequelize);


    Volunteer.hasMany(Work, { foreignKey: 'assignedVolunteerId'});
    Work.belongsTo(Volunteer, { foreignKey: 'assignedVolunteerId', as: 'assignedVolunteer'});

export { Volunteer, Work };
export { User }; 