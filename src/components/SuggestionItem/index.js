import './index.css'

const SuggestionItem = props => {
  const {suggestions, updateSuggestionInput} = props
  const {suggestion} = suggestions

  const onClickSearchArrow = () => {
    updateSuggestionInput(suggestion)
  }

  return (
    <li>
      <div className="suggestions-container">
        <p className="suggestion-text">{suggestion}</p>
        <img
          className="arrow"
          onClick={onClickSearchArrow}
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </div>
    </li>
  )
}
export default SuggestionItem
