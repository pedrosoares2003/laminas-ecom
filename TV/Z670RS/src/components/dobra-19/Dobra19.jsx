import bannerImage from '../../assets/image/dobra-19-z670rs.svg'
import style from './Dobra19.module.css'

const Dobra19 = () => {
  return (
    <div className={`${style.dobra_19 } banner`}>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
      <div className="textoBanner">
        <h3>
          Veja imagens nítidas e vibrantes de qualquer ângulo
        </h3>
        <p>
          Com a tecnologia de Wide Viewing Angle, você aproveita cores precisas e detalhes claros,
          independentemente de onde estiver sentado, garantindo uma excelente experiência de
          visualização em todos os momentos.
        </p>
      </div>
    </div>
  )
}

export default Dobra19