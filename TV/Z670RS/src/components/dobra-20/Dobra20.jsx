import bannerImage from '../../assets/image/dobra-20-z670rs.svg'
import style from './Dobra20.module.css'

const Dobra20 = () => {
  return (
    <div className={`${style.dobra_20 } banner`}>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
      <div className="textoBanner">
        <h3>
          Brilho excepcional para uma
          experiência visual transformadora
        </h3>
        <p>
          Com o High Peak Brightness da TV Toshiba, você entra em um mundo de visuais deslumbrantes.
          Cores e detalhes brilham como nunca, proporcionando uma experiência de visualização única que
          transforma o ambiente ao seu redor.
        </p>
      </div>
    </div>
  )
}

export default Dobra20