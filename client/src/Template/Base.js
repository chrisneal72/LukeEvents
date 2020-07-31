import React, { useState, useEffect } from "react";
import axios from "axios";
import Style1 from "./Style1";
import Error404 from "../Errors/Error404";

const Page = ({ match }) => {
  const [currentPage, setCurrentPage] = useState([]);

  useEffect(() => {
    axios
      .get(`./data/${match.params.pageId}.json`)
      .then(response => {
        setCurrentPage(response.data);
      })
      .catch(err => {
        setCurrentPage([]);
        console.log(err);
      });
  }, [match.params.pageId]);

  return (
    <>
      {(currentPage.title) ? <Style1 currentPage={currentPage} setCurrentPage={setCurrentPage} /> : <Error404 page={match.params.pageId} />}
    </>
  );
}

export default Page;