import bannerImage from '../../assets/image/dobra-23-z670rs.svg'
import style from './Dobra23.module.css'

const Dobra23 = () => {
  return (
    <div className={`${style.dobra_23 } banner`}>
      <div className="textoBanner">
        <h3>
          Controle sua TV de forma prática
        </h3>
        <p>
          Com o Apple AirPlay, você pode transmitir filmes, músicas, jogos e fotos diretamente do
          seu iPhone, iPad ou Mac para a sua televisão. Além disso, por ser compatível com o Apple
          Home, sua TV pode ser controlada facilmente usando seu iPhone, iPad, Apple Watch,
          HomePod mini ou Mac, através da tecnologia Apple HomeKit.
        </p>
      </div>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
    </div>
  )
}

export default Dobra23