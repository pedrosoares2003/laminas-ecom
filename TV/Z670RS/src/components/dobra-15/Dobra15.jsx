import bannerImage from '../../assets/image/dobra-15-z670rs.svg'
import style from './Dobra15.module.css'

const Dobra15 = () => {
  return (
    <div className={`${style.dobra_15 } banner`}>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
      <div className="textoBanner">
        <h3>
          Imagens impecáveis para cada ocasião
        </h3>
        <p>
          O Dolby Vision IQ utiliza metadados e sensores de luz ambiente avançados para ajustar cada
          detalhe do que você assiste. Ele se adapta automaticamente às mudanças na iluminação do
          ambiente, garantindo uma imagem perfeita em qualquer cômodo, a qualquer hora.
        </p>
      </div>
    </div>
  )
}

export default Dobra15