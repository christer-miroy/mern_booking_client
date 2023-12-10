import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import './home.css'


const Home = () => {
  return (
    <div>
      <Header />
      <div className="homeContainer">
        <h1 className="homeTitle">Featured Properties</h1>
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
      </div>
    </div>
  )
}
export default Home