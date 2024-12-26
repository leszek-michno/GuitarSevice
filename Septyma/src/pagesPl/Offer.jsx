import { PriceList } from '../assets/data/PriceList'
import '../assets/styles/_Offer.scss'

export const Offer = () => {
  return (
    <div className="offer">
    <h1>Oferta z cenami</h1>
    <p>(ceny nie obejmują kosztów nowych podzespołów, części i strun)</p>
    <div className="pricelist">
        {PriceList.map((item) => (
          <div className='list' key={item.id}>
            <h2>{item.name}</h2>
            <div className='content'>
            <p>{item.contents}</p>
            {!item.hideImg && <img src={item.img} alt="photo" loading="lazy" />}
            </div>
            <p className='price'>Cena: {item.price} zł </p>
            {/* <img src={item.img} alt="guitar" loading="lazy" /> */}
          </div>
        ))}
      </div>
    </div>
  )
}
