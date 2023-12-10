import './featuredProperties.css'

const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <div className="fpItem">
            <img src="https://images.unsplash.com/photo-1549848314-6feb163cb2d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2VidXxlbnwwfHwwfHx8MA%3D%3D" alt="" className="fpImg" />
            <div className="fpTitles">
                <span className="fpName">Aparthotel St Marks</span>
                <span className="fpCity">Evergreen Falls</span>
                <span className="fpPrice">Starting from $245.50</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://images.unsplash.com/photo-1591506578484-d496b18a6908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9ob2x8ZW58MHx8MHx8fDA%3D" alt="" className="fpImg" />
            <div className="fpTitles">
                <span className="fpName">Radiant Oasis Hotel</span>
                <span className="fpCity">Sapphire Springs</span>
                <span className="fpPrice">Starting from $1129.75 </span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://images.unsplash.com/photo-1579089810654-e7936b502468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFndWlvfGVufDB8fDB8fHww" alt="" className="fpImg" />
            <div className="fpTitles">
                <span className="fpName">Harbor View Inn</span>
                <span className="fpCity">Silverstone Harbor</span>
                <span className="fpPrice">Starting from $175.25</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://images.unsplash.com/photo-1519010470956-6d877008eaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFrYXRpfGVufDB8fDB8fHww" alt="" className="fpImg" />
            <div className="fpTitles">
                <span className="fpName">Serenity Suites & Spa</span>
                <span className="fpCity">Moonlight Grove</span>
                <span className="fpPrice">Starting from $299.00</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    </div>
  )
}
export default FeaturedProperties