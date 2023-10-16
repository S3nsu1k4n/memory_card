const Card = ({img, on_click}) => {
  return (
    <div className="card" onClick={on_click}>
      <img src={img.url} alt={img.id} />
    </div>
  )
}
export default Card;