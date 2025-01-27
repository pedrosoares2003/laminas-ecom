import bannerImage from '../../assets/image/dobra-4-z670rs.svg'
import style from './Dobra04.module.css'

const Dobra04 = () => {

  return (
    <div className={`${style.dobra_04} banner`}>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
      <div className="textoBanner">
        <h3>
          Inteligência Artificial para imagens incríveis
          em qualquer condição de iluminação
        </h3>
        <p>
          A Auto View Pro, baseada em I.A., ajusta automaticamente as configurações para se aproximar da qualidade de
          cinema profissional, analisando tanto o sinal quanto a iluminação ambiente. Isso garante uma experiência visual
          impressionante, onde quer que você esteja assistindo. As TVs Toshiba também são compatíveis com Dolby Vision
          IQ e HDR 10+ Adaptive.
        </p>
      </div>
    </div>
  )
}

export default Dobra04