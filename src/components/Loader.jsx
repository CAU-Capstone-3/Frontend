import { RaceBy } from "@uiball/loaders";
import styled from "styled-components";
const Container = styled.div`
  margin-left: 20px;
  display: flex;
  min-height: 80vh;
  justify-content: center;
  align-items: center;
  margin-left: 16rem;
  padding: 0 4rem;
  margin-top: 20px;
  border-style: solid;
  padding: 20px 0px;
`;
export default function Loader() {
  return (
    <Container>
      <RaceBy size={200} lineWeight={15} speed={1.4} color="#263cff" />
    </Container>
  );
}
