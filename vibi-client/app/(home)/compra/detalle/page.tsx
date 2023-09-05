import { useState, useEffect } from "react";
import axios from "axios";
import { Publication } from "../../../../redux/reducers/interfaces/detail/detail";



const Detalle = () => {
    const [detail, setDetail] = useState<Publication | null>(null);
    const publicationId = "1eebe05e-7abc-4228-a03e-06815829eb4b"
    useEffect(() => {
    axios.get(`http://localhost:3001/api/publication/detail/${publicationId}`)
    .then(response => response.data)
    .then(data => setDetail(data))
  
    }, [])
    console.log(detail)
  return (
    <div>
        <section>
            FOTOS {detail?.plan}
        </section>
        <br />

        <section>
            Links de Inicio - Compra - Filtros 
        </section>
        <br />

        <section>
            Domicilio 
            Heart 
            Share
        </section>
        <br />

        <section>
            Tipo de vivienda, cantidad habitaciones, cantidad baños. 
            Link Mira en mapa. 
        </section>
        <br />

        <section>
            Detalle de la vivienda
            Íconos
        </section>
        <br />

        <section>
            Otras características
            Íconos true/false
        </section>
        <br />

        <section>
            Servicios
            Íconos true/false
        </section>
        <br />

        <section>
            <h1>Recorrido virtual</h1>
            <p>Conoce esta vivienda a través de un recorrido virtual desde cualquier dispositivo móvil.</p>
            Botón Mira el video
        </section>
        <br />

        <section>
            <h1>Descripción general</h1>
            <p>Altoque presenta exclusivo y lujoso piso reformado, se encuentra en el distrito de Trujillo.
                Este piso, con una superficie construida de 315 metros cuadrados, cuenta con cuatro dormitorios dobles con armarios, dos baños completos y una cocina independiente a medida totalmente equipada con muebles y electrodomésticos.
                El amplio salón-comedor es perfecto para recibir invitados y disfrutar de la vida en familia. La terraza exterior acristalada verano-invierno con 22 metros es ideal para relajarse y disfrutar del sol. Las ventanas de climalit tipo doble con rotura de puente térmico y las puertas de madera lacadas en blanco proporcionan un ambiente acogedor.
                Además, cuenta con una piscina y zonas comunes ajardinadas, plaza de garaje en el mismo edificio, servicios de conserjería y acceso adaptado para personas con movilidad reducida.</p>
        </section>
        <br />

        <section>
            Lugares cercanos 
        </section>
        <br />

        <section>
            Viviendas similares 
        </section>
        <br />

    </div>
  )
}

export default Detalle