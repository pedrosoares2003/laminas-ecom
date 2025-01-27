import bannerImage from '../../assets/image/dobra-24-z670rs.svg'
import style from './Dobra24.module.css'

const Dobra24 = () => {
  return (
    <div className={`${style.dobra_24 } banner`}>
      <div className="textoBanner">
        <h3>
          Diversas conexões
        </h3>
        <p>
          Tenha todas as conexões que você precisa com AirPlay, Wi-Fi Dual Band, HDMI com
          suporte a eARC, Bluetooth 5.0 e WiSA SoundSend.
        </p>
      </div>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
    </div>
  )
}

export default Dobra24