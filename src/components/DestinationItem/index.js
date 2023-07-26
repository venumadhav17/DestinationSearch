import './index.css'

const DestinationItem = props => {
  const {destinationListItem} = props
  const {name, imgUrl} = destinationListItem

  return (
    <li className="card-container">
      <img src={imgUrl} alt={name} className="image-card" />
      <p className="paragraph">{name}</p>
    </li>
  )
}
export default DestinationItem
