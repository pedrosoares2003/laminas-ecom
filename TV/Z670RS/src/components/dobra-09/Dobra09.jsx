import bannerImage from '../../assets/image/dobra-9-z670rs.svg'
import style from './Dobra09.module.css'

const Dobra09 = () => {
  return (
    <div className={`${style.dobra_09 } banner`}>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
      <div className="textoBanner">
        <h3>
          Maximize seu domínio nos jogos com
          precisão e resposta incomparáveis
        </h3>
        <p>
          O Modo Game Pro da Toshiba TV aprimora sua experiência com uma correção de cores totalmente
          otimizada para jogos. Aproveite vantagens como AMD FreeSync Premium, VRR a 144Hz e ALLM, e
          mergulhe em um mundo de jogos onde cada momento faz a diferença.
        </p>
      </div>
    </div>
  )
}

export default Dobra09