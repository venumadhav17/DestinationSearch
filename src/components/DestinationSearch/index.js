import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResult = destinationsList.filter(eachitem =>
      eachitem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <h1 className="destination">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="cards">
          {searchResult.length === 0 ? (
            <li className="no-items-found">
              <p>No Items Found</p>
            </li>
          ) : (
            searchResult.map(eachitem => (
              <DestinationItem
                destinationListItem={eachitem}
                key={eachitem.id}
              />
            ))
          )}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
