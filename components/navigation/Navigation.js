import React, { useEffect } from "react";
import { useRouter } from "next/router";

/**
 * This component will render the Navigation page on "/navigation" URL.
 */
const Navigation = (props) => {
  const router = useRouter();

  /*This method will check if navigation data is present or not during component mount.
    If not present, it will route the user to homepage. */
  useEffect(() => {
    if (!props.navigationData) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <nav className="desktopNav row border-bottom bg-white">
        <div className="container">
          <ul>
            {props.navigationData &&
              props.navigationData.map((navigation, index) => {
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
                        navigation.brands_name
                          .split(",")
                          .map((brand, index) => {
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
