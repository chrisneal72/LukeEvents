import React, { useState, useEffect } from "react";
import axios from "axios";
import Style1 from "./Style1";
import Error404 from "../Errors/Error404";

const Page = ({ match }) => {
  const [currentPage, setCurrentPage] = useState([1]);

  useEffect(() => {
    axios
      .get(`/api/page/${match.params.pageId}`)
      .then(response => {
        setCurrentPage(response.data.data[0]);
      })
      .catch(err => {
        setCurrentPage([]);
        console.log(err);
      });
  }, [match.params.pageId]);
  return (
    <>
      {currentPage && currentPage.title && <Style1 currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      {!currentPage && <Error404 page={match.params.pageId} />}
    </>
  );
}

export default Page;