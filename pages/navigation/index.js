import React from "react";
import Navigation from "../../components/navigation/Navigation";

const NavigationPage = (props) => {
  return <Navigation {...props} />;
};

export default NavigationPage;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.gyftr.net/smartbuyapi/hdfc/api/v1/home/categories`
  );
  const post = await res.json();

  return {
    props: {
      navigationData: post.data,
    },
  };
}
