import bannerImage from '../../assets/image/dobra-25-z670rs.svg'
import style from './Dobra25.module.css'

const Dobra25 = () => {
  return (
    <div className={`${style.dobra_25 } banner`}>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
      <div className="textoBanner">
        <h3>
          Liberdade para as suas mãos
          com o controle por voz
        </h3>
        <p>
          Use sua voz para assistir à TV ao vivo, buscar títulos, reproduzir músicas, alternar entradas,
          controlar dispositivos de casa inteligente compatíveis e muito mais.
        </p>
      </div>
    </div>
  )
}

export default Dobra25