import bannerImage from '../../assets/image/dobra-18-z670rs.svg'
import style from './Dobra18.module.css'

const Dobra18 = () => {
  return (
    <div className={`${style.dobra_18 } banner`}>
      <div className="textoBanner">
        <h3>
          Preserve a visão artística do diretor
        </h3>
        <p>
          Assista a filmes e séries exatamente como foram concebidos pelos cineastas. Esse novo modo de
          imagem, disponível em TVs Ultra HD compatíveis, mantém a intenção criativa do diretor e oferece
          uma experiência cinematográfica que destaca a expressão artística em cada cena.
        </p>
      </div>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
    </div>
  )
}

export default Dobra18