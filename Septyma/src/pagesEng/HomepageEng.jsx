import mainphoto from "../assets/images/main1.webp";
import logo from "../assets/images/logo/SGsmalltransparent.png";
import "../assets/styles/_Homepage.scss";

export const HomepageEng = () => {
  return (
    <div className="homepage">
      <div className="guitar">
        <img src={mainphoto} alt="photo" />
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>guitar service</h2>
      </div>
      <main className="main">
        <p>
          Regardless of whether playing is your passion, hobby or profession -
          your guitar deserves special attention. It is an expression of your
          style, taste and personality, and also states your personal vision and
          self-image as a guitarist.
        </p>
        <p>
          For many of us, this one or several (dozen) guitars are the apple of
          our eye. Properly adjusted and cared for, they will serve us for many
          years, bringing joy and satisfaction from use.
        </p>
        <p>
          As a lover of the art of fiddling with the devil, I approach each
          instrument with this philosophy, individually adapting and constantly
          expanding the scope of services in the broad subject of luthiery, in
          order to meet the imagination and requirements of even the most
          demanding musicians.
        </p>
        <p>
          Septyma Guitars focuses on the quality of implemented projects,
          accessibility and filling empty spaces on the market of services and
          goods of the local music scene.
        </p>
      </main>
    </div>
  );
};
