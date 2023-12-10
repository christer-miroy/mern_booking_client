import './propertyList.css'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1529852572069-2fcbe7599434?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwcmVzb3J0fGVufDB8fDB8fHww" alt="" className="pListImg" />
            <div className="pListTitles">
                <h3>Hotels</h3>
                <p>123 hotels</p>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1564763623496-579a9824ca25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJlYWNoJTIwcmVzb3J0fGVufDB8fDB8fHww" alt="" className="pListImg" />
            <div className="pListTitles">
                <h3>Cabins</h3>
                <p>123 cabins</p>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.unsplash.com/photo-1537640685236-a9df2496e232?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJlYWNoJTIwcmVzb3J0fGVufDB8fDB8fHww" alt="" className="pListImg" />
            <div className="pListTitles">
                <h3>Hostels</h3>
                <p>123 hostels</p>
            </div>
        </div>
    </div>
  )
}
export default PropertyList