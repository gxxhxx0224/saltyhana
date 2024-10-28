import React, { useEffect, useRef } from "react";
import { ListContainer, ListTitle, ListItem } from "./styles";
import { Bank } from "../Maps/BankLocation";

interface BankListProps {
  banks: Bank[];
  onSelectBank: (bank: Bank) => void;
  selectedBank: Bank | null;
}

const BankList: React.FC<BankListProps> = ({
  banks,
  onSelectBank,
  selectedBank,
}) => {
  const selectedBankRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 선택된 아이템으로 포커싱
    if (selectedBankRef.current) {
      selectedBankRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [banks, selectedBank]);

  return (
    <>
      <ListTitle>지점 검색 결과</ListTitle>
      <ListContainer>
        {banks.length === 0 ? (
          <ListItem isSelected={false}>검색 결과가 없습니다.</ListItem>
        ) : (
          banks.map((bank) => (
            <ListItem
              key={bank.name}
              isSelected={selectedBank?.name === bank.name}
              onClick={() => onSelectBank(bank)}
              ref={selectedBank?.name === bank.name ? selectedBankRef : null} // 선택된 아이템에 ref 추가
            >
              {bank.name}
            </ListItem>
          ))
        )}
      </ListContainer>
    </>
  );
};

export default BankList;
