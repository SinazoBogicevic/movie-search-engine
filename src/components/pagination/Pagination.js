import React, { useContext } from "react";
import { Button } from "./pagination.elements";
import { PageContext } from "../../PageContext";
import { DataContext } from "../../DataContext";

const Pagination = (props) => {
  const [page, setPage] = useContext(PageContext);
  const [data] = useContext(DataContext);

  const handlePagination = () => {
    setPage((prevState) => prevState + 1);
    console.log(page);
    console.log(data);
  };

  return (
    <Button visible={props.visible} onClick={handlePagination}>
      Load more
    </Button>
  );
};

export default Pagination;
