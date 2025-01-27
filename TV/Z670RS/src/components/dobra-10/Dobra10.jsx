import bannerImage from '../../assets/image/dobra-10-z670rs.svg'
import style from './Dobra10.module.css'

const Dobra10 = () => {
  return (
    <div className={`${style.dobra_10 } banner`}>
      <img className="imageBanner" width="auto" height="auto" src={bannerImage} alt="Tv Multi Z670RS Banner" />
      <div className="textoBanner">
        <h3>
          O companheiro perfeito para o
          máximo desempenho nos jogos
        </h3>
        <p>
          Ganhe vantagem nas batalhas multiplayer intensas com o Game Deck, que permite ajustar as
          configurações de exibição da TV, o tamanho e a posição da imagem sem interromper seu jogo.
          O Game Deck da Toshiba TV coloca você no controle da arena, levando você à vitória.
        </p>
      </div>
    </div>
  )
}

export default Dobra10