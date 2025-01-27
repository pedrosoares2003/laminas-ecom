import bannerImage from '../../assets/image/dobra-7-z670rs.svg'
import style from './Dobra07.module.css'

const Dobra07 = () => {
  return (
    <div className={`${style.dobra_07 } banner`}>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
      <div className="textoBanner">
        <h3>
          Sem cortes e sem travamentos, só jogo
        </h3>
        <p>
          Com a tecnologia AMD FreeSync, você obtém um desempenho fluido e sem ruídos em praticamente qualquer
          taxa de quadros, eliminando jogabilidade truncada e frames quebrados. Basta conectar seu console a uma TV
          Toshiba com certificação AMD FreeSync para uma experiência de jogo suave e envolvente.
        </p>
      </div>
    </div>
  )
}

export default Dobra07