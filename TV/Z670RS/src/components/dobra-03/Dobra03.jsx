import bannerImage from '../../assets/image/dobra-3-z670rs.svg'
import style from './Dobra03.module.css'

const Dobra03 = () => {

  return (
    <div className={`${style.dobra_03} banner`}>
      <div className="textoBanner">
        <h3>
          Imersão total com desempenho 4K QLED,
          uma experiência visual de tirar o fôlego
        </h3>
        <p>
          O Engine ZRi é o novo processador revolucionário da Toshiba. Com a tecnologia QLED e análise de imagem
          precisa, ele eleva a qualidade da imagem a níveis extraordinários, entregando resolução 4K em cada detalhe
          e proporcionando uma experiência de visualização espetacular.
        </p>
      </div>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
    </div>
  )
}

export default Dobra03