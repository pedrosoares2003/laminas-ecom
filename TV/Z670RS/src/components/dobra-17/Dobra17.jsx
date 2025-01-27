import bannerImage from '../../assets/image/dobra-17-z670rs.svg'
import style from './Dobra17.module.css'

const Dobra17 = () => {
  return (
    <div className={`${style.dobra_17 } banner`}>
      <div className="textoBanner">
        <h3>
          Detalhes nítidos e contraste aprimorado
        </h3>
        <p>
          A tecnologia Dynamic Tone Mapping analisa cada quadro e ajusta automaticamente o brilho,
          proporcionando imagens realistas e detalhadas. Assim, você não perde nenhum detalhe, seja nas
          sombras ou nas cores vibrantes de um festival.
        </p>
      </div>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
    </div>
  )
}

export default Dobra17