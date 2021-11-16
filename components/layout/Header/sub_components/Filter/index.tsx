import { Container, InfosWrapper, SearchWrapper } from "./styles";
import { BsSearch, BsFillCalendarWeekFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import theme from "../../../../../global/theme";
import { formatDate } from "../../../../../helpers/format";

const DUMMY_DATA = {
  location: "North Carolina, NC 90025",
  begin_at: "2021-03-11",
  ends_at: "2021-12-12",
};

export default function Filter(): JSX.Element {
  const begin_at = formatDate(DUMMY_DATA.begin_at);
  const ends_at = formatDate(DUMMY_DATA.ends_at);
  const location = DUMMY_DATA.location;

  return (
    <Container>
      <InfosWrapper>
        <ImLocation size={14} color={theme.colors.gray_3} />
        <span>{location}</span>
      </InfosWrapper>
      <InfosWrapper>
        <BsFillCalendarWeekFill size={14} color={theme.colors.gray_3} />
        <span>{begin_at}</span>
      </InfosWrapper>
      <InfosWrapper>
        <BsFillCalendarWeekFill size={14} color={theme.colors.gray_3} />
        <span>{ends_at}</span>
      </InfosWrapper>
      <SearchWrapper>
        <BsSearch size={14} color={theme.colors.blue} />
      </SearchWrapper>
    </Container>
  );
}
