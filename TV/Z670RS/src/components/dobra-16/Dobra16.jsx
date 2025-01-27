import bannerImage from '../../assets/image/dobra-16-z670rs.svg'
import style from './Dobra16.module.css'

const Dobra16 = () => {
  return (
    <div className={`${style.dobra_16 } banner`}>
      <div className="textoBanner">
        <h3>
          Experiência visual personalizada com I.A
        </h3>
        <p>
          Mergulhe em cenas impressionantes, seja na vastidão de uma paisagem natural ou nas ruas sombrias de
          um filme de ação. A tecnologia AI Picture Optimizer da Toshiba, orientada por IA, ajusta automaticamente
          contraste, precisão e imersão de acordo com o conteúdo, trazendo cores vibrantes e texturas realistas que
          fazem cada momento parecer ainda mais envolvente e autêntico.
        </p>
      </div>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
    </div>
  )
}

export default Dobra16