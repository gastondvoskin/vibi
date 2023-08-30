import FooterButton from "../../commons/FooterButton";

export default function FooterExplore() {
  return (
    <>
    <section className="h-36 w-56 mr-10 mb-20">
      <p className="font-semibold h-5 mb-2">Explora</p>
      <FooterButton name="¿Cómo comprar?" route="/home" />
      <FooterButton name="Comprar" route="/compra" />
      <FooterButton name="Vende" route="/vende" />
      <FooterButton name="Nuestros servicios" route="/servicios" />
      </section>
    </>
  );
}
