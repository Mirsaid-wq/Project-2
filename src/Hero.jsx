import "./Hero.css";
import "@fontsource/source-serif-pro";

const Hero = () => {
  return (
    <section className="container hero">
      <div className="text-container">
        <h1>Hi, I'm James Mirro & I'm a photographer.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
        <button type="button">Read more</button>
      </div>
      <img className="img_3" src="src/assets/IMAGE.png" alt="Photographer" />
    </section>
  );
};

export default Hero;
