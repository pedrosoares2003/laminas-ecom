import bannerImage from '../../assets/image/dobra-14-z670rs.svg'
import style from './Dobra14.module.css'

const Dobra14 = () => {
  return (
    <div className={`${style.dobra_14 } banner`}>
      <div className="textoBanner">
        <h3>
          Descubra bilhões de cores com
          reprodução vibrante e precisa
        </h3>
        <p>
          A tecnologia de pontos quânticos da Toshiba gera cores intensas e realistas, entregando
          mais de um bilhão de tonalidades. Desfrute de uma experiência visual envolvente e
          autêntica, onde cada detalhe e nuance é aprimorado para máximo impacto.
        </p>
      </div>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
    </div>
  )
}

export default Dobra14