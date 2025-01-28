

export const getEventsData = async() => {  
    const url = 'https://nfl-api-data.p.rapidapi.com/nfl-events?year=2025';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c51f2009e8mshc967a039cff7c74p12c78fjsn6c84dc76eb10',
            'x-rapidapi-host': 'nfl-api-data.p.rapidapi.com'
        }
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.events)
        const arrayEvents = result.events.map( ( objEvent:any ) => {
            return {
                id : objEvent.id,
                name: objEvent.name,
                date: objEvent.date,
                competitions: objEvent.competitions,
                city: objEvent.competitions[0].venue.address.city,
                state: objEvent.competitions[0].venue.address.state,
            }
        });
        return arrayEvents;
    } catch (error) {
        console.error(error);
    }
    
}