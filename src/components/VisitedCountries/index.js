import './index.css'

const VisitedCountries = props => {
  const {visitedCountryDetails, removeVisitedCountries} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const remove = () => {
    removeVisitedCountries(id)
  }

  return (
    <li className="visited-countries-list">
      <div className="visited-countries-container">
        <img src={imageUrl} alt="thumbnail" className="country-flag" />
        <div className="details-container">
          <p className="visited-country-name">{name}</p>
          <button
            className="remove-button"
            type="button"
            onClick={remove}
            data-testid="delete"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountries
