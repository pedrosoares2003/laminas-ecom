import bannerImage from '../../assets/image/dobra-5-z670rs.svg'
import style from './Dobra05.module.css'

const Dobra05 = () => {
  return (
    <div className={`${style.dobra_05} banner`}>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
      <div className="textoBanner">
        <h3>
          Viva uma experiência fluida
        </h3>
        <p>
          Desfrute de uma cena de ação emocionante. Com uma taxa de atualização nativa de 144Hz, a TV
          proporciona uma suavidade impressionante e detalhes nítidos. Essa alta taxa de atualização faz com
          que imagens em movimento rápido ganhem vida, oferecendo uma clareza e fluidez incomparáveis. 
        </p>
      </div>
    </div>
  )
}

export default Dobra05