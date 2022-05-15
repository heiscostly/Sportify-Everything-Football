import React from "react";
import { SportContainerDiv } from "./SportsContainer.style";
import Card from "../Card/Card";
import axios from "axios";
import TableContainer from "../table/TableContainer";
import { BeatLoader } from "react-spinners";

function SportsContainer() {
  const [datas, setData] = React.useState([]);
  const [nextData, setNextdata] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    setIsLoading(true);
    axios({
      method: "get",
      url: "https://api.football-data.org/v2/competitions?areas=2077&plan=TIER_ONE",
      headers: {
        "X-Auth-Token": "72dbb17e60814dd592d41f91185a4c4d",
      },
    })
      .then((response) => response.data)
      .then((data) => {
        setData(data.competitions);
        setIsLoading(false);
      });
  }, []);

  console.log(datas, "nextsData");

  return (
    <>
      <SportContainerDiv>
        {!show ? (
          <div className="cont">
            <h1>All Competition</h1>
            {isLoading ? (
              <BeatLoader size={15} color={"#123abc"} loading={isLoading} />
            ) : (
              <div className="sports-container">
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
              </div>
            )}
          </div>
        ) : (
          <div className="cont">
            <h1>Championship</h1>

            <TableContainer nextData={nextData} />
          </div>
        )}
      </SportContainerDiv>
    </>
  );
}

export default SportsContainer;
