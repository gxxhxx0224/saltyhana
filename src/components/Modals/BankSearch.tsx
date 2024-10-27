import icon_search from "../../images/modal_search.png";
import { SearchBox } from "./styles";

const BankSearch: React.FC = () => {
  return (
    <SearchBox>
      <input type="text" placeholder="지점을 검색하세요" />
      <img src={icon_search} alt="Search" />
    </SearchBox>
  );
};

export default BankSearch;
