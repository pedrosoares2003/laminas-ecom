import bannerImage from '../../assets/image/dobra-27-z670rs.svg'
import style from './Dobra27.module.css'

const Dobra27 = () => {
  return (
    <div className={`${style.dobra_27 } banner`}>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
      <div className="textoBanner">
        <h3>
          Encontre elegância na simplicidade
        </h3>
        <p>
          A TV Toshiba, combina em seu design linhas horizontais e verticais em perfeita harmonia com o
          ambiente. Essa proposta transforma sua sala de estar em um espaço elegante e integrado ao seu lar.
        </p>
      </div>
    </div>
  )
}

export default Dobra27