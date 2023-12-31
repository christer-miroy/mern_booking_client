import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { faBed, faCalendar, faCarAlt, faHomeAlt, faL, faLocationPin, faPerson, faPlaneDeparture, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import { useEffect, useState } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    useEffect(() => {
        if (openDate) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
    }, [openDate]);

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })
    };

    const handleSearch = () => {
        navigate("/hotels", {
            state: {
                destination,
                date,
                options
            }
        });
    }

  return (
    <div className='header'>
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />&nbsp;
                    <span>Accomodations</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlaneDeparture} />&nbsp;
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCarAlt} />&nbsp;
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />&nbsp;
                    <span>Airport Taxis</span>
                </div>
            </div>

            {type !== "list" && <>
                <div className="headerSection">
                    <div className="headerGroup1">
                        <div className="headerText">
                            <h1 className="headerTitle">Your next dream vacation starts here</h1>
                            <p className='headerDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <button className="headerBtn">Sign in / Register</button>
                    </div>
                    <div className="headerGroup2">
                        <img src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFyYWRpc2V8ZW58MHx8MHx8fDA%3D" className='headerImg' />
                    </div>
                </div>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faLocationPin} className='headerIcon' />&nbsp;
                        <input type="text" name="location" id="location" placeholder='Search Location' onChange={e=>setDestination(e.target.value)} className='headerSearchInput' />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendar} className='headerIcon' />&nbsp;
                        <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                            minDate={new Date()}
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />&nbsp;
                        <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption('adult', 'd')}>-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption('adult', 'i')}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption('children', 'd')}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption('children', 'i')}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Rooms</span>
                                <div className="optionCounter">
                                    <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption('room', 'd')}>-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption('room', 'i')}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtnSearch" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </>}
        </div>    
    </div>
  )
}
export default Header