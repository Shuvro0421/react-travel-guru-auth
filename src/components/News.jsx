import { useContext } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Tour from "./Tour";

const News = () => {
    const [place_name, setBookMarks] = useState('');
    const [description, setBookMarks2] = useState('');
    const tours = useLoaderData();
    const {user} = useContext(AuthContext)
    const [id , setId] = useState(1)

    // Remove these lines:
    // setBookMarks('');
    // setBookMarks2('');

    const handleBookMarks = (place_name, description , id) => {
        setBookMarks(place_name);
        setBookMarks2(description);
        setId(id)
        console.log(id)
    }

    return (
        <div className="relative">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/0tJsd6h/Rectangle-1.png)' }}>
                <div className="hero-overlay bg-opacity-60 bg-black"></div>
                <div className="flex md:flex-row flex-col gap-4">
                    {
                        place_name && description &&

                        <div className="  w-96 flex md:flex-col justify-start text-white">
                            <p className="text-7xl bebas">{place_name}</p>
                            <p className="font-normal">{description}</p>
                            <div>
                                {
                                    user ? <Link className="btn btn-warning px-10 rounded-[5px] mt-4" to={`/booking/${id}`}>Booking</Link> :
                                    <Link className="btn btn-warning px-10 rounded-[5px] mt-4" to={'/login'}>Booking</Link>
                                }
                            </div>
                        </div>
                    }
                    <div className="flex md:flex-row flex-col gap-10">
                        {
                            tours.map(tour => <Tour key={tour.id} handleBookMarks={handleBookMarks} tour={tour}></Tour>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
