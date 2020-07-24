import React from "react";
import Navigation from "../../components/navigation/Navigation";
import { wrapper } from "../../store/store";
import Axios from "axios";
import { connect } from "react-redux";

/**
 * Navigation Page wrapper component.
 */
const NavigationPage = (props) => {
  return (
    <>
      <Navigation {...props} />
    </>
  );
};

export default connect((state) => state)(NavigationPage);

/**
 * Calling APi from server side and feeding the response to Navigation page component.
 * The page is accessible using "/navigation" route.
 */
export const getServerSideProps = wrapper.getServerSideProps(({ store }) => {
  return Axios.get(
    `https://api.gyftr.net/smartbuyapi/hdfc/api/v1/home/categorie`
  )
    .then((response) => {
      store.dispatch({ type: "BRAND", payload: response.data.data });
    })
    .catch((error) => {
      console.log("Something went Wrong--->", error);
    });
});
