"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Publication } from "../../../../interfaces/detail/detail";

const Detalle = () => {
  const [detail, setDetail] = useState<Publication | null>(null);

  // cambiar ruta del front para usar useParams y renderizar condicionalmente
  const publicationId = "0138f80f-c6ec-4cd7-b4a6-9c247d871486";
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/publication/detail/${publicationId}`)
      .then((response) => response.data)
      .then((data) => setDetail(data));
  }, []);
  console.log(detail);
  console.log(detail?.property.urls_photos);

  return (
    <div>
      <section>
        <img src={detail?.property.urls_photos[0]} alt="Photo" />
      </section>
      <br />

      <section>Links de Inicio - Compra - Filtros</section>
      <br />

      <section>Domicilio Heart Share
        <p className="">{detail?.property.propertyAddress.street}, {detail?.property.propertyAddress.district}, {detail?.property.propertyAddress.city}</p>
      </section>
      <br />

      <section>
        <p>
            <span>{detail?.property.propertyAddress.property_type}, </span>
            <span>{detail?.property.propertyInformation.rooms} dormitorios, </span>
            <span>{detail?.property.propertyInformation.baths} baños.</span>
        </p>
        
        Link Mira en mapa.
      </section>
      <br />

      <section>Detalle de la vivienda Íconos</section>
      <br />

      <section>Otras características Íconos true/false</section>
      <br />

      <section>Servicios Íconos true/false</section>
      <br />

      <section>
        <h1>Recorrido virtual</h1>
        <p>
          Conoce esta vivienda a través de un recorrido virtual desde cualquier
          dispositivo móvil.
        </p>
        Botón Mira el video
      </section>
      <br />

      <section>
        <h1>Descripción general</h1>
        <p>
          Altoque presenta exclusivo y lujoso piso reformado, se encuentra en el
          distrito de Trujillo. Este piso, con una superficie construida de 315
          metros cuadrados, cuenta con cuatro dormitorios dobles con armarios,
          dos baños completos y una cocina independiente a medida totalmente
          equipada con muebles y electrodomésticos. El amplio salón-comedor es
          perfecto para recibir invitados y disfrutar de la vida en familia. La
          terraza exterior acristalada verano-invierno con 22 metros es ideal
          para relajarse y disfrutar del sol. Las ventanas de climalit tipo
          doble con rotura de puente térmico y las puertas de madera lacadas en
          blanco proporcionan un ambiente acogedor. Además, cuenta con una
          piscina y zonas comunes ajardinadas, plaza de garaje en el mismo
          edificio, servicios de conserjería y acceso adaptado para personas con
          movilidad reducida.
        </p>
      </section>
      <br />

      <section>Lugares cercanos</section>
      <br />

      <section>Viviendas similares</section>
      <br />
    </div>
  );
};

export default Detalle;

// {detail?.property.urls_photos.map((photo, index) => {
//     return (<img src={photo} alt="Photo" />)
// })}
