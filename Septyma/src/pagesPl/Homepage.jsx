import mainphoto from "../assets/images/main1.webp";
import logo from "../assets/images/logo/SGsmalltransparent.png";
import "../assets/styles/_Homepage.scss";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="guitar">
        <img src={mainphoto} alt="photo" />
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>Serwis gitar z charakterem</h2>
      </div>
      <main className="main">
        <p>
          Niezależnie od tego, czy gra jest Twoją pasją, hobby lub profesją -
          Twoja gitara zasługuje na szczególną uwagę. Stanowi ona ekspresję
          Twojego stylu, gustu i osobowości, a także wyraża personalną wizję i
          self-image jako gitarzysty.
        </p>
        <p>
          Dla niejednego z nas ta jedna lub kilka(naście) gitar jest naszym
          oczkiem w głowie. Prawidłowo wyregulowana i zadbana będzie nam służyć
          przez długie lata niosąc radość i dając satysfakcję z użytkowania.
        </p>
        <p>
          Jako miłośnik sztuki rzeźbienia na wiośle, z taką właśnie filozofią
          podchodzę do każdego instrumentu, indywidualnie dostosowując i stale
          poszerzając zakres usług w jakże obszernym temacie lutnictwa, aby
          sprostać fantazji i wymaganiom nawet najbardziej wybrednych muzyków.
        </p>
        <p>
          Serwis Septyma Guitars stawia na jakość realizowanych projektów,
          przystępność oraz wypełnianie pustych przestrzeni na rynku usług i
          towarów lokalnej sceny muzycznej.
        </p>
      </main>
    </div>
  );
};
