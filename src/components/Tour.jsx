

const Tour = ({ tour , handleBookMarks }) => {
    const { image_url, description, place_name , id } = tour

    return (

        <div onClick={() => handleBookMarks(place_name ,description , id)}>
            <div className="relative">
                <img className="w-64" src={image_url} alt="" />
                <p className="absolute text-white bottom-4 text-3xl   right-0 left-4 bebas">{place_name}</p>
            </div>
        </div>
    );
};

export default Tour;