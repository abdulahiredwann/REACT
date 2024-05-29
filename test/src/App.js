import Footter from './Components/Footer/Footter';
import Header from './Components/Header/Header';
import Row1 from './Components/Rows/Row1';
import Row2 from './Components/Rows/Row2';
import Row3 from './Components/Rows/Row3';
import Row4 from './Components/Rows/Row4';

import './css/bootstrap.css'


function App() {
  return (
    <div>
      <Header />

      <div className="top-100 container">
        <Row1 />
        <Row2/>
        <Row3/>
        <Row4/>
      </div>
      <Footter />
    </div>

  )
}

export default App;