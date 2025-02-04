
import Auth from '../utils/auth';

export const getEventsData = async() => {  
    const url = 'https://nfl-api-data.p.rapidapi.com/nfl-events?year=2025';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c749b4422amsh78e9a345cf96886p17b3f6jsnd9271783581a',
            'x-rapidapi-host': 'nfl-api-data.p.rapidapi.com'
        }
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.events)
        const arrayEvents = await Promise.all(result.events.map( async ( objEvent:any ) => {
            const weatherDetails = await getWeatherDetails(objEvent.competitions[0].venue.address.city, objEvent.date);
            return {
                id : objEvent.id,
                name: objEvent.name,
                date: objEvent.date,
                competitions: objEvent.competitions,
                city: objEvent.competitions[0].venue.address.city,
                state: objEvent.competitions[0].venue.address.state,
                weather: weatherDetails
            }
        }));
        return arrayEvents;
    } catch (error) {
        console.error(error);
    }
    
}
export const getWeatherDetails = async (city: string, date: string) => {
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/weather/${city}/${date}`;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${Auth.getToken()}` // Include the auth token
        }
    };

    console.log('Fetching weather details from URL:', url);

   
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response text:', errorText);
            throw new Error('Failed to fetch weather details');
        }
        const weatherDetails = await response.json();
        if (weatherDetails.message) {
            console.log(weatherDetails.message);
            return weatherDetails.message;
        }
        return weatherDetails;
    } catch (error) {
        console.error('Error fetching weather details:', error);
        return null;
    }
};