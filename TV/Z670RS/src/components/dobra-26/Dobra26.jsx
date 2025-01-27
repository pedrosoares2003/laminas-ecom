import bannerImage from '../../assets/image/dobra-26-z670rs.svg'
import style from './Dobra26.module.css'

const Dobra26 = () => {
  return (
    <div className={`${style.dobra_26 } banner`}>
      <div className="textoBanner">
        <h3>
          Projete a tela do seu dispositivo
          direto na TV
        </h3>
        <p>
          Com a função de espelhamento, compartilhe o conteúdo do seu celular, tablet ou
          notebook na tela grande. Curta fotos, músicas, vídeos, jogos e aplicativos com ainda
          mais imersão e aproveite ao máximo sua experiência de entretenimento.
        </p>
      </div>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
    </div>
  )
}

export default Dobra26