import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AgrBtn from "../../assets/수락버튼.png";
import RejBtn from "../../assets/거절버튼.png";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Loading from "../../components/Loader";
import { INVITE, USERS } from "../../constants/serverConstant";
const Container = styled.div`
  margin-left: 20px;
  display: flex;
  width: auto;
  font-family: Gmarket Sans;
  flex-direction: column;
  padding: 0 4rem;
  margin-top: 20px;
  border-style: solid;
  padding: 20px 0px;
`;
const AgrButton = styled.button`
  width: 62px;
  height: 25px;
  background-image: url(${AgrBtn});
  border: none;
`;
const RejButton = styled.button`
  width: 62px;
  height: 25px;
  background-image: url(${RejBtn});
  border: none;
`;
const TContainer = styled.div`
  font-family: Gmarket Sans;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4f546c;
  background-color: #f9fbff;
`;
const Table = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  box-shadow: 0 5px 10px #f9fbff;
  background-color: white;
  width: 800px;
  td,
  th {
    padding: 1rem 2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    font-weight: 900;
    display: table-cell;
  }
  thead {
    box-shadow: 0 5px 10px #e1e5ee;
  }
  /* td,
  th {
    border: 1px 
  } */
  td {
    padding: 1rem 2rem;
  }
  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
  }
  box-shadow: 0 5px 10px #e1e5ee;
  caption {
    text-align: center;
    border-bottom: 2px solid #3b72ff;
    font-size: 25px;
    padding: 10px;
    background-color: #ffffff;
    font-weight: bold;
  }
`;
export default function GroupInviteList() {
  const [Data, SetData] = useState([""]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await api
      .get(USERS.GET_INVITE_GROUP(localStorage.getItem("userId")))
      .then((res) => {
        SetData(res.data["result"]);
        setLoading(false);
        console.log(res.data["result"]);
      })
      .error((e) => {
        console.log(e);
      });
  }
  async function acceptInvite(groupInviteId) {
    await api
      .post(INVITE.POST_ACCEPT, {
        groupInviteId: `${groupInviteId}`,
        accept: `true`,
      })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .error((e) => {
        console.log(e);
      });
  }
  async function rejectInvite(groupInviteId) {
    await api
      .post(INVITE.POST_ACCEPT, {
        groupInviteId: `${groupInviteId}`,
        accept: `false`,
      })
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .error((e) => {
        console.log(e);
      });
  }
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <Container>
          <Table>
            <caption>그룹초대목록</caption>
            <thead>
              <tr>
                <th>그룹</th>
                <th>그룹장</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Data.map((data) => (
                <tr key={data.groupInviteId}>
                  <td>{data.groupName}</td>
                  <td>{data.groupOwnerName}</td>
                  <td>
                    <AgrButton
                      type="button"
                      onClick={() => {
                        acceptInvite(data.groupInviteId);
                      }}
                    />
                    <RejButton
                      type="button"
                      onClick={() => {
                        rejectInvite(data.groupInviteId);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
}
