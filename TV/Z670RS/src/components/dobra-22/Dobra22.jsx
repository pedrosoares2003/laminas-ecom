import bannerImage from '../../assets/image/dobra-22-z670rs.svg'
import style from './Dobra22.module.css'

const Dobra22 = () => {
  return (
    <div className={`${style.dobra_22 } banner`}>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
      <div className="textoBanner">
        <h3>
          Controle sua TV com sua voz
        </h3>
        <p>
          Com um simples toque no botão do microfone do controle remoto, você pode usar
          comandos de voz para controlar sua TV. A TV Toshiba está pronta para ouvir e
          atender a todas as suas solicitações.
        </p>
      </div>
    </div>
  )
}

export default Dobra22