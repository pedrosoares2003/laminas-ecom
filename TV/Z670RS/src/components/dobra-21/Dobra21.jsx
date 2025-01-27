import bannerImage from '../../assets/image/dobra-21-z670rs.svg'
import style from './Dobra21.module.css'

const Dobra21 = () => {
  return (
    <div className={`${style.dobra_21 } banner`}>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
      <div className="textoBanner">
        <h3>
          Experiência imersiva para ver, ouvir e sentir
        </h3>
        <p>
          Combine a imagem do Dolby Vision HDR com o som do Dolby Atmos para criar uma experiência audiovisual
          imersiva. Transforme sua TV em um verdadeiro centro de entretenimento, proporcionando detalhes visuais e
          sonoros que oferecem um realismo surpreendente, que você verá, ouvirá e sentirá como nunca antes.
        </p>
      </div>
    </div>
  )
}

export default Dobra21