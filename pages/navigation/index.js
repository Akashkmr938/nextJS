import React from "react";
import Navigation from "../../components/navigation/Navigation";

const NavigationPage = (props) => {
  return (
    <>
      <Navigation {...props} />
    </>
  );
};

export default NavigationPage;

export async function getServerSideProps(context) {
  let navigationMenu;
  let failure = false;
  try {
    const res = await fetch(
      `https://api.gyftr.net/smartbuyapi/hdfc/api/v1/home/categories`
    );
    navigationMenu = await res.json();
  } catch {
    console.log("Something went Wrong");
    failure = true;
  } finally {
    if (!failure) {
      return {
        props: {
          navigationData: navigationMenu.data,
        },
      };
    }
    return {
      props: {
        navigationData: null,
      },
    };
  }
}
