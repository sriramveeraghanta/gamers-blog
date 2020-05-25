import React from "react"
// icons
import SyLogo from "../../images/icons/symbol-28.png"

function Footer(props) {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div>
              <p className="logo-text">
                <img className="logo-img" src={SyLogo} alt="not-found" /> BEKO
              </p>
              <p>
                Heaven fruitful doesn't over lesser days appear creeping seasons
                so behold bearing days open
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <h4>Contact Info</h4>
            <p>Address : Your address goes here, your demo address. Canada.</p>
            <p>Phone : +8880 44338899</p>
            <p>Email : info@myblog.com</p>
          </div>
          <div className="col-md-3">
            <h4> Important Link</h4>
            <p>WHMCS-bridge</p>
            <p>Search</p>
            <p>Domain</p>
            <p>My Account</p>
          </div>
          <div className="col-md-3">
            <h4> Newsletter</h4>
            <p>
              Heaven fruitful doesn't over lesser in days. Appear creeping
              seasons deve behold bearing days open
            </p>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
              />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <p className="p-1 m-0">
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/roundicons"
                title="Roundicons"
              >
                Roundicons
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                {" "}
                www.flaticon.com
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <div className="d-flex float-right">
              <div className="p-2">
                <i class="fab fa-facebook-f"></i>
              </div>
              <div className="p-2">
                <i class="fab fa-twitter"></i>
              </div>
              <div className="p-2">
                <i class="fab fa-behance-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
