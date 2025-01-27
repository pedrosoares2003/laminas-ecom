import bannerImage from '../../assets/image/dobra-11-z670rs.svg'
import style from './Dobra11.module.css'

const Dobra11 = () => {
  return (
    <div className={`${style.dobra_11 } banner`}>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
      <div className="textoBanner">
        <h3>
          Aproveite ao máximo o desempenho
          de conteúdos em HDR
        </h3>
        <p>
          A TV Toshiba é compatível com Dolby Vision HDR, HDR10+, HDR10 e HLG. Independentemente do
          formato, a TV decodifica o conteúdo com precisão, oferecendo mais detalhes nas sombras e destaques
          mais brilhantes. Assista aos lançamentos dos principais streamings disponíveis, ou mergulhe nos seus
          jogos favoritos aproveitando uma imersão total.
        </p>
      </div>
    </div>
  )
}

export default Dobra11