import CarouselData from "../data/carousel1";
import AliceCarousel from 'react-alice-carousel';

const CarouselData0 = () => {
    const result = CarouselData.map(data => {

        return (
            <div className="sliderimg">
                <h2 className="CarouselDataH2">{data.name}</h2>
                <button className="CarouselDataBTN1">{data.button}</button>
                <button className="CarouselDataBTN2">{data.button2}</button>
                <img className="CarouselDataIMG" src={data.image} alt="" />
                <p className="CarouselDataPARA">{data.para}</p>
            </div>
        )
    })
    console.log(result)
    return (
        <div>
            <AliceCarousel>
                {result}
            </AliceCarousel>
        </div>
    )
}



export default CarouselData0