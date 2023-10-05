import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const Booking = () => {
    const { id } = useParams()
    const [tour, setTour] = useState({});
    const tours = useLoaderData()
    useEffect(() => {
        const findTour = tours.find(tour => tour?.id == id)
        setTour(findTour)
    }, [tours, id])


    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/0tJsd6h/Rectangle-1.png)' }}>
                <div className="hero-overlay bg-opacity-60 bg-black"></div>
            </div>
        </div>
    );
};

export default Booking;