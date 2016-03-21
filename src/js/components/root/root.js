import React from "react";
const {Component} = React;
import NavBar from "./../f7Components/navbar.js";
import NavButton from "./../f7Components/navbar-button.js";
import Page from "./../f7Components/page.js";

export default class Root extends Component {
  render() {
    return (
        <div style={{width: "100%", height: "100%"}}>
          <div className="statusbar-overlay"></div>
          <div className="views">
            <div className="view view-main">
              <div className="navbar">
                <NavBar page="index">
                  <div className="center sliding">Trunk EC</div>
                  <NavButton side="right">
                    <a href="#" className="link icon-only">
                      <i className="icon icon-bars"></i>
                    </a>
                  </NavButton>
                </NavBar>
              </div>
              <div className="pages navbar-through toolbar-through">
                <Page page="index">
                  <div className="page-content">
                    <div className="content-block-title">Welcome To Trunk News</div>
                    <div className="content-block">
                      <div className="content-block-inner">
                        <p>This app illustrates how you can use built-in template engine Template7 to render pages with required data.</p>
                      </div>
                    </div>
                    <div className="list-block">
                      <ul>
                        <li><a href="#about" data-template="about" data-context-name="about" className="item-link item-content">
                            <div className="item-inner">
                              <div className="item-title">About Me</div>
                            </div></a></li>
                        <li><a href="projects.html" className="item-link item-content">
                            <div className="item-inner">
                              <div className="item-title">My Favorite</div>
                            </div></a></li>
                        <li><a href="cars.html" data-context-name="cars" className="item-link item-content">
                            <div className="item-inner">
                              <div className="item-title">My News</div>
                            </div></a></li>
                        <li><a href="contacts.html" className="item-link item-content">
                            <div className="item-inner">
                              <div className="item-title">Contacts</div>
                            </div></a></li>
                      </ul>
                    </div>
                    <div className="content-block-title">Side panels</div>
                    <div className="content-block">
                      <div className="row">
                        <div className="col-50"><a href="#" data-panel="left" className="button open-panel">Left Panel</a></div>
                        <div className="col-50"><a href="#" data-panel="right" className="button open-panel">Right Panel</a></div>
                      </div>
                    </div>
                  </div>
                </Page>
              </div>
              <div className="toolbar">
                <div className="toolbar-inner"><a href="#" className="link">Link 1</a><a href="#" className="link">Link 2</a></div>
              </div>
            </div>
          </div>
        </div>
    );
  }
};
