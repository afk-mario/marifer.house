import Link from "next/link";

import Page from "layouts/page";

function Home() {
  return (
    <Page title="Home">
      <section id="acerca-de">
        <div className="rich-text">
          <p>
            Un espacio en el internet para compartir las que cosas que nos
            gustan alrededor de nuestra casa.
          </p>
        </div>
      </section>
      <hr />
      <section id="restaurantes">
        <h2>Restaurantes</h2>
        <ul>
          <li>
            <Link href="/restaurantes?tags=desayuno">
              <a>Desayuno</a>
            </Link>
          </li>
          <li>
            <Link href="/restaurantes?tags=comida">
              <a>Comida</a>
            </Link>
          </li>
          <li>
            <Link href="/restaurantes?tags=cena">
              <a>Cena</a>
            </Link>
          </li>
        </ul>
      </section>
    </Page>
  );
}

export default Home;
