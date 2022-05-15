import React, { useState } from "react";
import Table from "./Table";
import { BeatLoader } from "react-spinners";
import axios from "axios";

const AllCustomersTableContainer = ({ nextData }) => {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(datas, "dataingggg");

  React.useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: `https://api.football-data.org/v2/competitions/${nextData}/standings?standingType=TOTAL`,
      headers: {
        "X-Auth-Token": "72dbb17e60814dd592d41f91185a4c4d",
      },
    })
      .then((response) => response.data)
      .then((data) => {
        setData(data.standings[0].table);
        setLoading(false);
      });
  }, [nextData]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Team",
        accessor: "team",
        Cell: ({ cell }) => {
          return (
            <>
              <img src={cell.row.original.team.crestUrl} alt="team" />
              <span>{cell.row.original.team.name}</span>
            </>
          );
        },
      },
      {
        Header: "MP",
        accessor: "playedGames",
      },
      {
        Header: "W",
        accessor: "won",
      },
      {
        Header: "D",
        accessor: "draw",
      },
      {
        Header: "L",
        accessor: "lost",
      },
      {
        Header: "GF",
        accessor: "goalsFor",
      },
      {
        Header: "GA",
        accessor: "goalsAgainst",
      },
      {
        Header: "pts",
        accessor: "points",
      },
    ],
    []
  );

  return (
    <div style={{ width: "100%" }}>
      {loading ? (
        <BeatLoader
          size={15}
          color={"#123abc"}
          loading={loading}
          style={{ margin: "0 auto" }}
        />
      ) : (
        <Table columns={columns} data={datas} />
      )}
    </div>
  );
};

export default AllCustomersTableContainer;
