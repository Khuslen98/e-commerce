import CarouselData from "../data/carousel1";

const CarouselData0 = CarouselData.map(data => {
    return (
        <div style={data.style}>
            <h2 style={data.style}>{data.name}</h2>,
            <button style={data.style}>{data.button}</button>,
            <button style={data.style}>{data.button2}</button>,
            <img src={data.image} style={data.style} alt="" />,
            <p style={data.style}>{data.para}</p>
        </div>
    )
})
export default CarouselData0