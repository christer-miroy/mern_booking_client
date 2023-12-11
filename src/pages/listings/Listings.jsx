import './listings.css'
import Header from "../../components/header/Header"
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

const Listings = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" name="destination" id="destination" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check-in Dates</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Minimum price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" min={1} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Maximum price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" min={1} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adults</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Listings