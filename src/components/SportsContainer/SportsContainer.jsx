import React from "react";
import { SportContainerDiv } from "./SportsContainer.style";
import Card from "../Card/Card";
import axios from "axios";
import TableContainer from "../table/TableContainer";

function SportsContainer() {
  const [datas, setData] = React.useState([]);
  const [nextData, setNextdata] = React.useState(null);
  const [show, setShow] = React.useState(false);

  console.log(nextData, "nextData");
  // console.log(datas, "data");
  React.useEffect(() => {
    axios({
      method: "get",
      url: "http://api.football-data.org/v2/competitions?areas=2077&plan=TIER_ONE",
      headers: {
        "X-Auth-Token": "72dbb17e60814dd592d41f91185a4c4d",
      },
    })
      .then((response) => response.data)
      .then((data) => {
        // console.log(data, "sup data");
        setData(data.competitions);
      });
  }, []);
  return (
    <>
      <SportContainerDiv>
        {!show ? (
          <div className="cont">
            <h1>All Competition</h1>
            <div className="sports-container">
              {/* <h1>All Competition</h1> */}
              {datas &&
                datas.map((item, index) => (
                  <Card
                    setNextdata={setNextdata}
                    setShow={setShow}
                    show={show}
                    key={index}
                    item={item}
                  />
                ))}
              {/* <div > */}
              {/* <Card /> */}
              {/* </div> */}
            </div>
          </div>
        ) : (
          <div className="cont">
            <h1>All Competition</h1>
            {/* <div className="sports-container"> */}
            {/* <h1>All Competitioners</h1> */}
            <TableContainer nextData={nextData} />
            {/* {datas &&
              datas.map((item, index) => <Card key={index} item={item} />)} */}
            {/* <div > */}
            {/* <Card /> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        )}
      </SportContainerDiv>
    </>
  );
}

export default SportsContainer;
