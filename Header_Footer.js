function header(){
    return `<header>
    <div class="container">
      <a href="#" class="logo">
        <img src="./Images/trivago-logo.png" alt="Trivago logo">
      </a>
      <div>
        <nav id="navOne">
            <ul>
              <li><a href="index.html"><span><i class="fa-solid fa-bed"></i></span><span>Stays</span></a></li>
              <li><a href="cars.html"><span><i class="fa-solid fa-car"></i></span><span>Cars</span></a></li>
              <li><a href="Flightindex.html"><span><i class="fa-solid fa-plane"></i></span><span>Flights</span></a></li>
              <li><a href="#"><span><i class="fa-solid fa-suitcase"></i></span><span>Packages</span></a></li>
            </ul>
          </nav>
      </div>
      <div>
        <nav id="navTwo">
            <ul>
                <li><a href="Fav.html"><span><i class="fa-regular fa-heart"></i></span><span>My Favourites</span></a></li>
                <li><a href="Login.html"><span>Log in</span><span></span></a></li>
                <li><a href="#"><span>Menu</span><span></span></a></li>
                <select>
                    <optgroup label="Top currencies">
                        <option value="Eur" label="EUR - Euro">Euro</option>
                        <option value="GBP" label="GBP - British Pound">Euro</option>
                        <option value="USD" label="USD - US Dollar">USD</option>
                    </optgroup>
                    <optgroup label="All currencies">
                        <option value="AED" label="AED - Emirati Dirham"></option>
                        <option value="ARS" label="ARS - Argentine Peso"></option>
                        <option value="AUD" label="AUD - Australian Dollar"></option>
                        <option value="AZN" label="AZN - Azerbaijani Manat"></option>
                        <option value="BGN" label="BGN - Bulgarian Lev"></option>
                        <option value="BHD" label="BHD - Bahraini Dinar"></option>
                        <option value="BRL" label="BRL - Brazilian Real"></option>
                        <option value="CAD" label="CAD - Canadian Dollar"></option>
                        <option value="CHF" label="CHF - Swiss Franc"></option>
                        <option value="CLP" label="CLP - Chilean Peso"></option>
                        <option value="CNY" label="CNY - Chinese Yuan"></option>
                        <option value="COP" label="COP - Colombian Peso"></option>
                        <option value="CZK" label="CZK - Czech Koruna"></option>
                        <option value="DKK" label="DKK - Danish Krone"></option>
                        <option value="DZD" label="DZD - Algerian Dinar"></option>
                        <option value="EGP" label="EGP - Egyptian Pound"></option>
                        <option value="INR" label="INR - Indian Rupee"></option>
                        <option value="JPY" label="JPY - Japanese Yen"></option>
                        <option value="MXN" label="MXN - Mexican Peso"></option>

                    </optgroup>
                </select>
            </ul>
        </nav>
      </div>
    </div>
  </header>
  <hr>`
}

function footer(){
    return `<footer>
    <div id="f1">
        <p>Want to receive exclusive hotel offers? Subscribe to our newsletter!</p>
        <form> 
            <input placeholder="Email address" type="text" id="email">
            <input placeholder="Subscribe" type="button" value="Subscribe" id="Subscribe">
        </form>
    </div>
    <hr id="fl">
    <div id="f2">
        <p>trivago N.V., Kesselstraße 5 – 7, 40221 Düsseldorf, Germany</p>
        <select>
            <option>India</option>
        </select>
    </div>
    <div id="f3">
        <a href="#"><i class="fa-brands fa-facebook" ></i></a>
        <a href="#"><i class="fa-brands fa-square-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        
    </div>
    <div id="f4">
        <ul>
            <li><a>Company</a></li>
            <li><a>Jobs</a></li>
            <li><a>Press</a></li>
            <li><a>Investor relations</a></li>
        </ul>
        <ul>
            <li><a>Mobile apps - searching on the go</a></li>
            <li><a>trivago Business Studio</a></li>
        </ul>
        <ul>
            <li><a>Help</a></li>
            <li><a>Learn how trivago works</a></li>
            <li><a>Terms and conditions</a></li>
            <li><a>Legal information</a></li>
            <li><a>Do Not Sell My Personal Information</a></li>
            <li><a>Privacy notice</a></li>
            <li><a>Cyber Security</a></li>
            <li><a>Coronavirus (COVID-19) travel advice</a></li>
        </ul>
    </div>
    <div id="f5">
        <img src="./Images/trivago-logo-black-and-white.png">
        <p align="center">Copyright 2023 trivago | All rights reserved.</p>
    </div>
</footer>`
}
export {header,footer};