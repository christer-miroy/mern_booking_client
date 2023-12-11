import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://images.unsplash.com/photo-1502208327471-d5dde4d78995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjByZXNvcnR8ZW58MHx8MHx8fDA%3D" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
            Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
            </span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$112</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}
export default SearchItem