
import './App.css';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';

function App() {
  return (
    <div className="App">
      <div className="header-logo">
          <StorefrontIcon className="header-log-image" fontSize="large"/>
      </div>
    <div className="header-search"></div>
    <div className="header-nav">
      <div className="nav-item">
      <div className="nav-item-one">Hello Guest</div>
      <div className="nav-item-two">Sing In</div>
    </div>
    
    <div className="nav-item">
      <div className="nav-item-one">Your</div>
      <div className="nav-item-two">Shop</div>
    </div>
    
    <div className="nav-item">
      <ShoppingBasketIcon fontSize="large"/>
      <div className="nav-item-two">0</div>
    </div>
    </div>      

      </div>)
}

export default App;
