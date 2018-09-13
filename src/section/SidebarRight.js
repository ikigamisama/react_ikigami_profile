import React from 'react';
import '../assets/css/sidebar.css';

export default props =>
<div className="sidebar right">
    <div className="sidebar-header">
      <p className="theme-bg">Options</p>
    </div>
    <div className="sidebar-content">
      <div className="sidebar-switch-form">
        <div className="setting-label">
          <label htmlFor="dark_theme_switch">Dark Version</label>
        </div>
        <div className="setting-function">
          <div className="switch-form">
            <label>
              <input type="checkbox" id="dark_theme_switch" />
              <span className="switch-lever"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className="sidebar-theme-content">
        <ul>
          <li className="skins-color-label">
              PREMIUM COLORS
          </li>
          <li data-color-theme="blue-gradient-bg">
          <div className="theme-blue-gradient-bg"></div>
            <span className="label-color">BLUE</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color" value="blue-gradient" defaultChecked  />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="purple-gradient-bg">
            <div className="theme-purple-gradient-bg"></div>
            <span className="label-color">PURPLE</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color" value="purple-gradient" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="peach-gradient-bg">
            <div className="theme-peach-gradient-bg"></div>
            <span className="label-color">PEACH</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color" value="peach-gradient" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="aqua-gradient-bg">
            <div className="theme-aqua-gradient-bg"></div>
            <span className="label-color">AQUA</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color" value="aqua-gradient" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
                    <li data-color-theme="roseanna-gradient-bg">
                        <div className="theme-roseanna-gradient-bg"></div>
                        <span className="label-color">ROSEANNA</span>
                        <span className="mark-checked">
                            <input type="radio" id="color_select" name="select_color" value="roseanna-gradient" />
                            <label htmlFor="color_select">
                                <i className="fa fa-check"></i>
                            </label>
                        </span>
                    </li>
                    <li data-color-theme="sexy-blue-gradient-bg">
                        <div className="theme-sexy-blue-gradient-bg"></div>
                        <span className="label-color">SEXY BLUE</span>
                        <span className="mark-checked">
                            <input type="radio" id="color_select" name="select_color" value="sexy-blue-gradient" />
                            <label htmlFor="color_select">
                                <i className="fa fa-check"></i>
                            </label>
                        </span>
                    </li>
                    <li data-color-theme="mauve-gradient-bg">
                        <div className="theme-mauve-gradient-bg"></div>
                        <span className="label-color">MAUVE</span>
                        <span className="mark-checked">
                            <input type="radio" id="color_select" name="select_color" value="mauve-gradient" />
                            <label htmlFor="color_select">
                                <i className="fa fa-check"></i>
                            </label>
                        </span>
                    </li>
                    <li data-color-theme="piglet-gradient-bg">
                        <div className="theme-piglet-gradient-bg"></div>
                        <span className="label-color">PIGLET</span>
                        <span className="mark-checked">
                            <input type="radio" id="color_select" name="select_color" value="piglet-gradient" />
                            <label htmlFor="color_select">
                                <i className="fa fa-check"></i>
                            </label>
                        </span>
                    </li>
                    <li data-color-theme="shades-of-grey-gradient-bg">
                        <div className="theme-shades-of-grey-gradient-bg"></div>
                        <span className="label-color">SHADES OF GREY</span>
                        <span className="mark-checked">
                            <input type="radio" id="color_select" name="select_color" value="shades-of-grey-gradient" />
                            <label htmlFor="color_select">
                                <i className="fa fa-check"></i>
                            </label>
                        </span>
                    </li>
                    <li data-color-theme="lost-memory-gradient-bg">
                        <div className="theme-lost-memory-gradient-bg"></div>
                        <span className="label-color">LOST MEMORY</span>
                        <span className="mark-checked">
                            <input type="radio" id="color_select" name="select_color" value="lost-memory-gradient" />
                            <label htmlFor="color_select">
                                <i className="fa fa-check"></i>
                            </label>
                        </span>
                    </li>
                    <li data-color-theme="socialive-gradient-bg">
                        <div className="theme-socialive-gradient-bg"></div>
                        <span className="label-color">SOCIALIVE</span>
                        <span className="mark-checked">
                            <input type="radio" id="color_select" name="select_color" value="socialive-gradient" />
                            <label htmlFor="color_select">
                                <i className="fa fa-check"></i>
                            </label>
                        </span>
                    </li>
                    <li data-color-theme="cherry-gradient-bg">
                        <div className="theme-cherry-gradient-bg"></div>
                        <span className="label-color">CHERRY</span>
                        <span className="mark-checked">
                            <input type="radio" id="color_select" name="select_color" value="cherry-gradient" />
                            <label htmlFor="color_select">
                                <i className="fa fa-check"></i>
                            </label>
                        </span>
                    </li>
                    <li data-color-theme="pinky-gradient-bg">
                        <div className="theme-pinky-gradient-bg"></div>
                        <span className="label-color">PINKY</span>
                        <span className="mark-checked">
                            <input type="radio" id="color_select" name="select_color" value="pinky-gradient" />
                            <label htmlFor="color_select">
                                <i className="fa fa-check"></i>
                            </label>
                        </span>
                    </li>
                    <li data-color-theme="lush-gradient-bg">
                        <div className="theme-lush-gradient-bg"></div>
                        <span className="label-color">LUSH</span>
                        <span className="mark-checked">
                            <input type="radio" id="color_select" name="select_color" value="lush-gradient" />
                            <label htmlFor="color_select">
                                <i className="fa fa-check"></i>
                            </label>
                        </span>
                    </li>
          <li className="skins-color-label">
            BOOTSTRAP COLORS
          </li>
          <li data-color-theme="danger-color-bg">
            <div className="theme-danger-color-bg"></div>
            <span className="label-color">DANGER</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="danger-color" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="warning-color-bg">
            <div className="theme-warning-color-bg"></div>
            <span className="label-color">WARNING</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="warning-color" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="success-color-bg">
            <div className="theme-success-color-bg"></div>
            <span className="label-color">SUCCESS</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="success-color" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="info-color-bg">
            <div className="theme-info-color-bg"></div>
            <span className="label-color">INFO</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="info-color" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li className="skins-color-label">
            BOOTSTRAP COLORS (DARK)
          </li>
          <li data-color-theme="danger-color-bg-bg">
            <div className="theme-danger-color-dark-bg"></div>
            <span className="label-color">DANGER</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="danger-color-dark" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="warning-color-dark-bg">
            <div className="theme-warning-color-dark-bg"></div>
            <span className="label-color">WARNING</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="warning-color-dark" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="success-color-dark-bg">
            <div className="theme-success-color-dark-bg"></div>
            <span className="label-color">SUCCESS</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="success-color-dark" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="info-color-dark-bg">
            <div className="theme-info-color-dark-bg"></div>
            <span className="label-color">INFO</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="info-color-dark" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li className="skins-color-label">
            MDB COLORS
          </li>
          <li data-color-theme="default-color-bg">
            <div className="theme-default-color-bg"></div>
            <span className="label-color">DEFAULT (MDB)</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="default-color" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="primary-color-bg">
            <div className="theme-primary-color-bg"></div>
            <span className="label-color">PRIMARY (MDB)</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="primary-color" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="secondary-color-bg">
            <div className="theme-secondary-color-bg"></div>
            <span className="label-color">SECONDARY (MDB)</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="secondary-color" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li className="skins-color-label">
            MDB COLORS (DARK)
          </li>
          <li data-color-theme="default-color-dark-bg">
            <div className="theme-default-color-dark-bg"></div>
            <span className="label-color">DEFAULT (MDB)</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="default-color-dark" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="primary-dark-bg">
            <div className="theme-primary-color-dark-bg"></div>
            <span className="label-color">PRIMARY (MDB)</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="primary-color-dark" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="secondary-dark-bg">
            <div className="theme-secondary-color-dark-bg"></div>
            <span className="label-color">SECONDARY (MDB)</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="secondary-color-dark" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li className="skins-color-label">
            DARK THEME
          </li>
          <li data-color-theme="elegant-color-bg">
            <div className="theme-elegant-color-bg"></div>
            <span className="label-color">ELEGANT</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="elegant-color" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="stylish-color-bg">
            <div className="theme-stylish-color-bg"></div>
            <span className="label-color">STYLISH</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="stylish-color" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="unique-color-bg">
            <div className="theme-unique-color-bg"></div>
            <span className="label-color">UNIQUE</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="unique-color" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="special-color-bg">
            <div className="theme-special-color-bg"></div>
            <span className="label-color">SPECIAL</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="special-color" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li className="skins-color-label">
            DARK THEME (DARK)
          </li>
          <li data-color-theme="elegant-color-dark-bg">
            <div className="theme-elegant-color-dark-bg"></div>
            <span className="label-color">ELEGANT (DARK)</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="elegant-color-dark" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="stylish-color-dark-bg">
            <div className="theme-stylish-color-dark-bg"></div>
            <span className="label-color">STYLISH (DARK)</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="stylish-color-dark" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="unique-color-dark-bg">
            <div className="theme-unique-color-dark-bg"></div>
            <span className="label-color">UNIQUE (DARK)</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="unique-color-dark" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="special-color-dark-bg">
            <div className="theme-special-color-dark-bg"></div>
            <span className="label-color">SPECIAL (DARK)</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="special-color-dark" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li className="skins-color-label">
            MATERIALIZE COLORS
          </li>
          <li data-color-theme="red-bg">
            <div className="theme-red-bg"></div>
            <span className="label-color">RED</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="red" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="pink-bg">
            <div className="theme-pink-bg"></div>
            <span className="label-color">PINK</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="pink" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="purple-bg">
            <div className="theme-purple-bg"></div>
            <span className="label-color">PURPLE</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="purple" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="deep-purple-bg">
            <div className="theme-deep-purple-bg"></div>
            <span className="label-color">DEEP PURPLE</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="deep-purple" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="indigo-bg">
            <div className="theme-indigo-bg"></div>
            <span className="label-color">INDIGO</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="indigo" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="blue-bg">
            <div className="theme-blue-bg"></div>
            <span className="label-color">BLUE</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="blue" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="light-blue-bg">
            <div className="theme-light-blue-bg"></div>
            <span className="label-color">LIGHT BLUE</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="light-blue" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="cyan-bg">
            <div className="theme-cyan-bg"></div>
            <span className="label-color">CYAN</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="cyan" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="teal-bg">
            <div className="theme-teal-bg"></div>
            <span className="label-color">TEAL</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="teal" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="green-bg">
            <div className="theme-green-bg"></div>
            <span className="label-color">GREEN</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="green" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="light-green-bg">
            <div className="theme-light-green-bg"></div>
            <span className="label-color">LIGHT GREEN</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="light-green" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="lime-bg">
            <div className="theme-lime-bg"></div>
            <span className="label-color">LIME</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="lime" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="yellow-bg">
            <div className="theme-yellow-bg"></div>
            <span className="label-color">YELLOW</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="yellow" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="amber-bg">
            <div className="theme-amber-bg"></div>
            <span className="label-color">AMBER</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="amber" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="orange-bg">
            <div className="theme-orange-bg"></div>
            <span className="label-color">ORANGE</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="orange" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="deep-orange-bg">
            <div className="theme-deep-orange-bg"></div>
            <span className="label-color">DEEP ORANGE</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="deep-orange" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="brown-bg">
            <div className="theme-brown-bg"></div>
            <span className="label-color">BROWN</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="brown" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="grey-bg">
            <div className="theme-grey-bg"></div>
            <span className="label-color">GREY</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="grey" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="blue-grey-bg">
            <div className="theme-blue-grey-bg"></div>
            <span className="label-color">BLUE GREY</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="blue-grey" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
          <li data-color-theme="mdb-bg">
            <div className="theme-mdb-bg"></div>
            <span className="label-color">MDB</span>
            <span className="mark-checked">
              <input type="radio" id="color_select" name="select_color"  value="mdb" />
              <label htmlFor="color_select">
                <i className="fa fa-check"></i>
              </label>
            </span>
          </li>
        </ul>
    </div>
  </div>
