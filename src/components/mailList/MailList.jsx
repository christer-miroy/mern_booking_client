import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Save time and money!</h1>
        <span className="mailDesc">Find the best deals here</span>
        <div className="mailInputContainer">
            <input type="email" name="email" id="email" placeholder='Enter your email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
export default MailList