import bannerImage from '../../assets/image/dobra-8-z670rs.svg'
import style from './Dobra08.module.css'

const Dobra08 = () => {
  return (
    <div className={`${style.dobra_08 } banner`}>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
      <div className="textoBanner">
        <h3>
          Otimização máxima para
          dominar seu jogo
        </h3>
        <p>
          Maximize seu potencial de jogo com nossa avançada tecnologia de ajuste de imagem,
          que permite personalizar a experiência de acordo com seu estilo e preferências únicas.
        </p>
      </div>
    </div>
  )
}

export default Dobra08