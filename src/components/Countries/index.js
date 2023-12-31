import './index.css'

const Countries = props => {
  const {details, addVisitedCountries} = props
  const {id, name, isVisited} = details

  const buttonText = isVisited ? 'Visited' : 'Visit'

  const addCountry = () => {
    addVisitedCountries(id)
  }

  return (
    <>
      <li className="countries-list">
        <div className="country-list-container">
          <p className="country-name">{name}</p>
          {isVisited === true ? (
            <p className="visited-text">{buttonText}</p>
          ) : (
            <button className="visit-button" type="button" onClick={addCountry}>
              {buttonText}
            </button>
          )}
        </div>
      </li>
      <hr className="horizontal-line" />
    </>
  )
}

export default Countries
