import { PriceList } from '../data/PriceList'
import '../styles/_Offer.scss'

export const Offer = () => {
  return (
    <div className="offer">
    <h1>Oferta z cenami</h1>
    <div className="pricelist">
        {PriceList.map((item) => (
          <div className='list' key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.contents}</p>
            <p className='price'>Cena: {item.price} zł </p>
            {/* <img src={item.img} alt="guitar" loading="lazy" /> */}
          </div>
        ))}
      </div>
    </div>
  )
}
