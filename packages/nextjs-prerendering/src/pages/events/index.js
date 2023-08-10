import { useState } from "react";
import { useRouter} from 'next/router';

function EventList({eventList}) {
    const [events, setEvents] = useState(eventList);
    const router = useRouter();
    const fecthSportsEvents = async ()=>{
        
        const response = await fetch('http://localhost:4000/events?category=sports');
        const data = await response.json();
        setEvents(data);
        router.push('/events?category=sports', undefined,{shallow:true});
    }
    return (<>
        <button onClick={fecthSportsEvents}>Sports Events</button>
        <h2>List for Events</h2>
        {
            events.map(event=>{
                return (<div key={event.id}>
                    <h2>
                        {event.id} {event.date} {event.title} {event.category}
                    </h2>
                    <p>
                        {event.description}
                    </p>
                </div>)
            })
        }
    </>)
}

export default EventList;

export async function getServerSideProps(context) {
    const {query } = context;
    const {category} = query;
    const queryString = category ? 'category=sports':'';
    const response = await fetch(`http://localhost:4000/events?${queryString}`);
    const data = await response.json();
    return {
        props: {
            eventList: data
        }
    }
}