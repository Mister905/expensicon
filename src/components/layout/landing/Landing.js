import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../../actions/auth";
import M from "materialize-css";
import logo from "../../../assets/img/logo.png";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="pimg1">
          <div className="ptext">
            <div className="valign-wrapper justify-content-center">
              <img src={logo} alt="Expensicon Logo" />
              <span className="center-align landing-brand-heading">
                Expensicon
              </span>
            </div>
            <button className="btn btn-login" onClick={this.props.login}>
              Login
            </button>
          </div>
        </div>

        <div className="section section-dark">
          <div className="row">
            <div className="col m6 offset-m3">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
              <p className="section-text">
                Ad provident laudantium exercitationem, dolorem sint soluta
                quibusdam in iure, fugit magni distinctio rem expedita ab unde
                odio quam voluptate nam voluptates, iusto doloribus dolorum
                molestiae quidem! Odio harum omnis sint necessitatibus sed
                corporis maiores pariatur nisi minima. Doloremque rerum ipsum
                cumque totam nulla adipisci ducimus tempora ab ut voluptatum
                minima dolore aperiam, possimus officiis accusamus repellat
                tenetur, animi at expedita nam! Eligendi ducimus commodi quas
                possimus, nemo aliquam vero corrupti dolor optio? Animi, quia
                neque pariatur laborum quaerat consequuntur! Praesentium natus
                commodi quibusdam sapiente minus esse magnam cumque obcaecati at
                consequatur.
              </p>
            </div>
          </div>
        </div>

        <div className="pimg3">
          <div className="ptext">Morbi nec vestibulum</div>
        </div>

        <div className="section section-light">
          <div className="row">
            <div className="col m6 offset-m3">
              <h2>Nam ex ex, egestas nec lectus condimentum</h2>
              <p className="section-text">
                Efficitur blandit risus. Nunc nec urna vehicula, tempus risus
                at, ultricies nunc. Suspendisse egestas, tellus sed pharetra
                porttitor, tellus ante scelerisque ligula, consequat
                sollicitudin elit odio et purus. Vestibulum vel massa eu mi
                elementum pellentesque a eu augue. Duis volutpat nulla at leo
                dictum pharetra. Donec vehicula volutpat vehicula. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Maecenas vehicula urna egestas ex suscipit
                pharetra. Ut congue, tellus ut convallis placerat, eros mi
                finibus enim, ut gravida ligula nisl at sem.
              </p>
            </div>
          </div>
        </div>

        <div className="pimg4">
          <div className="ptext">
            <div className="valign-wrapper justify-content-center">
              <img src={logo} alt="Expensicon Logo" />
              <span className="center-align landing-brand-heading">
                Expensicon
              </span>
            </div>
          </div>
          <div className="footer white-text">
            <div className="footer-row center-align">Expensicon &trade;</div>
            <div className="footer-row center-align">Hamilton, Ontario</div>
            <div className="footer-row center-align">289-775-6046</div>
            <div className="footer-row center-align">support@expensicon.ca</div>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(Landing);
