import CardsContainer from "../../components/CardsContainer"
import RootLayout from "../layout"

export default function Compra() {
  return (
    <RootLayout showLogoFooter={true}>
    <main>
      <h1>Lista de propiedades</h1>
      <CardsContainer />
    </main>
    </RootLayout>
  )
}
