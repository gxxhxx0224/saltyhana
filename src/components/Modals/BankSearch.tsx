import React, { useState } from "react";
import icon_search from "../../images/modal_search.png";
import { SearchBox } from "./styles";

interface BankSearchProps {
  onSearch: (query: string) => void; // 검색어 전달 함수
}

const BankSearch: React.FC<BankSearchProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSearch = () => {
    if (inputValue.trim() === "") {
      setInputValue(""); // 빈 검색어일 경우 input 초기화
      return;
    }
    onSearch(inputValue); // 부모에게 검색어 전달
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch(); // 엔터 키를 누르면 검색어 전달
    }
  };

  return (
    <SearchBox>
      <input
        type="text"
        placeholder={"검색어를 입력해주세요"}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <img
        src={icon_search}
        alt="Search"
        onClick={handleSearch}
        style={{ cursor: "pointer" }}
      />
    </SearchBox>
  );
};

export default BankSearch;
