import React from "react";

import Layout from "./components/Layout";
import Post from "./components/Post";

function App() {
  //Idealy url should contain the id of the post
  //which is url to query the api

  return (
    <Layout>
      <Post id="dfqxf8" />
    </Layout>
  );
}

export default App;
