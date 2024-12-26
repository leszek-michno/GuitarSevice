import { PriceListEng } from '../assets/data/PriceList'
import '../assets/styles/_Offer.scss'

export const OfferEng = () => {
  return (
    <div className="offer">
    <h1>Offer with prices</h1>
    <p>(prices do not include the cost of new components, parts and strings)</p>
    <div className="pricelist">
        {PriceListEng.map((item) => (
          <div className='list' key={item.id}>
            <h2>{item.name}</h2>
            <div className='content'>
            <p>{item.contents}</p>
            {!item.hideImg && <img src={item.img} alt="photo" loading="lazy" />}
            </div>
            <p className='price'>Price: {item.price} zł </p>
            {/* <img src={item.img} alt="guitar" loading="lazy" /> */}
          </div>
        ))}
      </div>
    </div>
  )
}