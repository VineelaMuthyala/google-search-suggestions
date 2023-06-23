import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInputValue: ''}

  searchInputFunction = event => {
    this.setState({searchInputValue: event.target.value})
  }

  updateSuggestionInput = suggestion => {
    this.setState({searchInputValue: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInputValue} = this.state

    const filteredList = suggestionsList.filter(eachItem =>
      eachItem.suggestion
        .toLowerCase()
        .includes(searchInputValue.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          className="google-logo"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="search-container">
          <div className="search-input-container">
            <img
              className="search-icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
            />
            <input
              className="search-input"
              type="search"
              placeholder="Search Google"
              value={searchInputValue}
              onChange={this.searchInputFunction}
            />
          </div>
          <ul className="unordered-list">
            {filteredList.map(eachItem => (
              <SuggestionItem
                suggestions={eachItem}
                key={eachItem.id}
                updateSuggestionInput={this.updateSuggestionInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
