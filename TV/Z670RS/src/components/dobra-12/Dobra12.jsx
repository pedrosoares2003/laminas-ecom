import bannerImage from '../../assets/image/dobra-12-z670rs.svg'
import style from './Dobra12.module.css'

const Dobra12 = () => {
  return (
    <div className={`${style.dobra_12 } banner`}>
      <div className="textoBanner">
        <h3>
          Brilho intenso e sombras
          precisas para detalhes incríveis
        </h3>
        <p>
          A luz de fundo LED é dividida em múltiplas zonas, permitindo o controle individual do brilho
          em cada uma delas. Com a tecnologia Full Array Local Dimming, o contraste entre áreas claras
          e escuras é significativamente aprimorado, proporcionando uma diferença visível em cenas de
          alto impacto, como um deslumbrante pôr do sol.
        </p>
      </div>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
    </div>
  )
}

export default Dobra12