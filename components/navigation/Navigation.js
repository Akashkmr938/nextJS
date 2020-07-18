import React from "react";

const Navigation = (props) => {
  return (
    <>
      <nav className="desktopNav row border-bottom bg-white">
        <div className="container">
          <ul>
            {props.navigationData.map((navigation, index) => {
              return (
                <li key={index} className="dropdown spriteMenu">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    id="apparel-accessories-Dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <figure>
                      <img src={navigation.icon_url} alt={navigation.name} />
                      <figcaption>{navigation.name}</figcaption>
                    </figure>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="apparel-accessories-Dropdown"
                  >
                    {navigation.brands_name.split(",").length &&
                      navigation.brands_name.split(",").map((brand, index) => {
                        return (
                          <a key={index} className="dropdown-item" href="#">
                            {brand}
                          </a>
                        );
                      })}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
