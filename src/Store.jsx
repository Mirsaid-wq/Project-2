import "./Store.css";

const Store = () => {
  return (
    <>
      <div class="store_2">
        <img className="design" src="src/logos/Page-designs.png" alt="" />
        <h1 class="store_h1">Preset Store </h1>
        <p class="store_p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla.
        </p>
      </div>
      <section className="store">
        <div className="card_2">
          <div className="img_2">
            <img src="src/assets/IMAGE (1).png" alt="" />
          </div>
          <div className="white_card">
            <h2>Mirro Preset Pack Vol. 01</h2>
            <p>
              The first volume is my go-to presets when shooting action sports.
              Just the right amount of contrast and highlights to make your
              photo (literally) pop!
            </p>
          </div>
        </div>
        <div className="card_2">
          <div className="img_2">
            <img src="src/assets/IMAGE (2).png" alt="" />
          </div>
          <div className="white_card">
            <h2>Mirro Preset Pack Vol. 02</h2>
            <p>
              The first volume is my go-to presets when shooting action sports.
              Just the right amount of contrast and highlights to make your
              photo (literally) pop!
            </p>
          </div>
        </div>{" "}
        <div className="card_2">
          <div className="img_2">
            <img src="src/assets/IMAGE (3).png" alt="" />
          </div>
          <div className="white_card">
            <h2>Mirro Preset Pack Vol. 03</h2>
            <p>
              The first volume is my go-to presets when shooting action sports.
              Just the right amount of contrast and highlights to make your
              photo (literally) pop!
            </p>
          </div>
        </div>
      </section>
      <h2 className="store_l">
        <a href="#">Preset Store </a>{" "}
        <img src="src/logos/IMAGE (4).png" alt="" />
      </h2>
    </>
  );
};
export default Store;
