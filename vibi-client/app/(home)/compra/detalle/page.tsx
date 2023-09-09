"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Publication } from "../../../../interfaces/detail/detail";
import DetailInDetail from "../../../../components/home/compra/DetailInDetail";
import OtherCharacteristics from "../../../../components/home/compra/OtherCharacteristics";
import ServicesInDetail from "../../../../components/home/compra/ServicesInDetail";
import OlvidateDeBuscar from "../../../../components/home/compra/OlvidateDeBuscar";

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
  // console.log(detail);
  // console.log(detail?.property.urls_photos);

  return (
    <div>
      <section>
        <img src={detail?.property.urls_photos[0]} alt="Photo" />
      </section>
      <br />

      <section>Links de Inicio - Compra - Filtros</section>
      <br />

      <section>
        <p className="text-zinc-900 text-2xl font-semibold leading-normal">
          {detail?.property.propertyAddress.street},{" "}
          {detail?.property.propertyAddress.district},{" "}
          {detail?.property.propertyAddress.city}.
        </p>
        <p className="text-slate-600 text-base font-normal leading-snug">
          <span>{detail?.property.propertyAddress.property_type}, </span>
          <span>
            {detail?.property.propertyInformation.rooms} dormitorios,{" "}
          </span>
          <span>{detail?.property.propertyInformation.baths} baños. </span>
          <span className="text-rose-600 text-base font-normal leading-snug">
            Mira en mapa
          </span>
        </p>
      </section>
      <br />

      <div className="w-96 h-32 flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch text-zinc-900 text-xl font-bold leading-normal">
          Detalle de la vivienda
        </div>
        <div className="justify-start items-start gap-8 inline-flex">
          <div className="justify-start items-start gap-8 flex">
            <div className="flex-col justify-start items-start gap-8 inline-flex">
              <div className="justify-center items-center gap-2.5 inline-flex">
                <div className="w-4 h-4 relative" />
                <div className="text-zinc-900 text-base font-normal leading-snug">
                  315 m2
                </div>
              </div>
              <div className="justify-center items-center gap-2.5 inline-flex">
                <div className="w-4 h-4 relative">
                  <div className="w-3.5 h-4 left-[1px] top-[-0.02px] absolute"></div>
                </div>
                <div className="text-zinc-900 text-base font-normal leading-snug">
                  Piso 7
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-8 inline-flex">
              <div className="justify-center items-center gap-2.5 inline-flex">
                <div className="w-4 h-4 relative" />
                <div className="text-zinc-900 text-base font-normal leading-snug">
                  3 dormitorios
                </div>
              </div>
              <div className="justify-center items-center gap-3 inline-flex">
                <div className="w-4 h-4 relative">
                  <div className="w-4 h-4 left-0 top-0 absolute"></div>
                </div>
                <div className="text-zinc-900 text-base font-normal leading-snug">
                  Ascensor
                </div>
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-8 inline-flex">
              <div className="justify-center items-center gap-2.5 inline-flex">
                <div className="w-4 h-4 relative">
                  <div className="w-3.5 h-4 left-[1px] top-0 absolute"></div>
                </div>
                <div className="text-zinc-900 text-base font-normal leading-snug">
                  2 baños
                </div>
              </div>
              <div className="justify-center items-center gap-3 inline-flex">
                <div className="w-4 h-4 relative" />
                <div className="text-zinc-900 text-base font-normal leading-snug">
                  Amoblado
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <div className="justify-start items-start gap-8 inline-flex">
              <div className="justify-center items-center gap-2 flex">
                <div className="w-4 h-4 relative">
                  <div className="w-4 h-3.5 left-[0.01px] top-[0.16px] absolute"></div>
                </div>
                <div className="text-zinc-900 text-base font-normal leading-snug">
                  Cochera
                </div>
              </div>
              <div className="justify-start items-start gap-2 flex">
                <div className="w-4 h-4 relative">
                  <div className="w-4 h-4 left-0 top-0 absolute"></div>
                </div>
                <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="text-zinc-900 text-base font-normal leading-snug">
                    12 años
                  </div>
                  <div className="text-slate-600 text-xs font-normal leading-3">
                    Antigüedad
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center items-center gap-3 inline-flex">
              <div className="w-4 h-4 relative" />
              <div className="text-zinc-900 text-base font-normal leading-snug">
                Otro
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <DetailInDetail
          propertyInformation={detail?.property.propertyInformation}
          propertyFloor={detail?.property.propertyAddress.floor}
        />
      </section>
      <br />

      <section>
        <OtherCharacteristics
          propertyDetail={detail?.property.propertyDetail}
        />
      </section>
      <br />

      <section>
        <ServicesInDetail
          propertyInformation={detail?.property.propertyInformation}
          propertyFloor={detail?.property.propertyAddress.floor}
        />
      </section>
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
