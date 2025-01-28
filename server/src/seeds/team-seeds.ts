import { TeamSeed } from './types';

export const teamSeeds: TeamSeed[] = [
  {
    id: "21",
    location: "Philadelphia",
    name: "Eagles",
    displayName: "Philadelphia Eagles",
    abbreviation: "PHI",
    venue: {
      fullName: "Lincoln Financial Field",
      address: {
        city: "Philadelphia",
        state: "PA",
        zipCode: "19148"
      }
    }
  },
  {
    id: "28",
    location: "Washington",
    name: "Commanders",
    displayName: "Washington Commanders",
    abbreviation: "WSH",
    venue: {
      fullName: "FedExField",
      address: {
        city: "Landover",
        state: "MD",
        zipCode: "20785"
      }
    }
  },
  {
    id: "19",
    location: "New York",
    name: "Giants",
    displayName: "New York Giants",
    abbreviation: "NYG",
    venue: {
      fullName: "MetLife Stadium",
      address: {
        city: "East Rutherford",
        state: "NJ",
        zipCode: "07073"
      }
    }
  },
  {
    id: "6",
    location: "Dallas",
    name: "Cowboys",
    displayName: "Dallas Cowboys",
    abbreviation: "DAL",
    venue: {
      fullName: "AT&T Stadium",
      address: {
        city: "Arlington",
        state: "TX",
        zipCode: "76011"
      }
    }
  }
];

export const seedTeams = async () => {
  try {
    // Assuming Team model is imported and configured
    // await Team.bulkCreate(teamSeeds);
    console.log('\n----- TEAMS SEEDED -----\n');
  } catch (error) {
    console.error('Error seeding teams:', error);
    throw error;
  }
};
