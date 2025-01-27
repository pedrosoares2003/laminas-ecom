import bannerImage from '../../assets/image/dobra-6-z670rs.svg'
import style from './Dobra06.module.css'

const Dobra06 = () => {
  return (
    <div className={`${style.dobra_06} banner`}>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
      <div className="textoBanner">
        <h3>
          Melhore sua experiência de jogo
        </h3>
        <p>
          Descubra o poder do Auto Low Latency Mode (ALLM) da TV Toshiba, que conecta seu dispositivo de
          jogos à TV de forma perfeita. Aproveite uma experiência de jogo sem interrupções e atrasos, com cada
          movimento respondendo imediatamente. Com o ALLM, o atraso não será mais motivo de frustração.
        </p>
      </div>
    </div>
  )
}

export default Dobra06