import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1502208327471-d5dde4d78995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjByZXNvcnR8ZW58MHx8MHx8fDA%3D" alt="" className='featuredImg' />
            <div className="featuredTitles">
                <h3>Boracay</h3>
                <p>123 hotels</p>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjByZXNvcnR8ZW58MHx8MHx8fDA%3D" alt="" className='featuredImg' />
            <div className="featuredTitles">
                <h3>El Nido</h3>
                <p>456 hotels</p>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1526786220381-1d21eedf92bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNoJTIwcmVzb3J0fGVufDB8fDB8fHww" alt="" className='featuredImg' />
            <div className="featuredTitles">
                <h3>Siargao</h3>
                <p>789 hotels</p>
            </div>
        </div>
    </div>
  )
}
export default Featured