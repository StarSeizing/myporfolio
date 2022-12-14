import "./topbar.scss"
// import {Person,Mail} from '@material-ui/icons';
// import EmailIcon from '@mui/icons-material/Email';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
              <img src="../../assets/tech-logo.png" alt="logo" />
            </a>
              
            <div className="itemContainer">
              {/* <Person className="icon"/> */}
              <span>+111 111 1111</span>
            </div>
              
            <div className="itemContainer">
              {/* <EmailIcon className="icon"/> */}
              <span>cly043@gmail.com</span>
            </div>

          </div>

          <div className="right">
              <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
            </div>
        </div>
    </div>
  )
}
