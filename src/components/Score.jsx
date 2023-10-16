const Score = ({highscore, currentscore}) => {
  return (
    <section className="score">
      <div className="highscore">
        <span>Highscore: </span><span>{highscore}</span>
      </div>
      <div className="currentscore">
        <span>Current Score: </span><span>{currentscore}</span>
      </div>
    </section>
  )
}
export default Score;