import bannerImage from '../../assets/image/dobra-13-z670rs.svg'
import style from './Dobra13.module.css'

const Dobra13 = () => {
  return (
    <div className={`${style.dobra_13 } banner`}>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
      <div className="textoBanner">
        <h3>
          Converta seu conteúdo<br />
          4K com inteligência artificial
        </h3>
        <p>
          A tecnologia exclusiva de upscaling da Toshiba, baseada em IA, transforma conteúdos nativos
          Full HD em 4K. Em vez de apenas aumentar a resolução, ela analisa as cores e detalhes ao redor
          de cada pixel, ajustando-os com precisão para preservar a textura e a qualidade original da cena.
        </p>
      </div>
    </div>
  )
}

export default Dobra13