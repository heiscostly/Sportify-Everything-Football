import React, { useState } from "react";
import styled from "styled-components";
import Table from "./Table";

import axios from "axios";

const AllCustomersTableContainer = ({ nextData }) => {
  const [datas, setData] = useState([]);
  console.log(datas, "dataingggg");

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

  React.useEffect(() => {
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
      });
  }, [nextData]);

  return (
    <div style={{ width: "100%" }}>
      <Table columns={columns} data={datas} />
    </div>
  );
};

export default AllCustomersTableContainer;
