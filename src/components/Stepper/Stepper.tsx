import { useMemo, useRef, useEffect, useState, useCallback } from "react";
import _ from "underscore";

import { BarWrapper, Bar, StepCircle } from "./styles";

interface Props {
  curCount: number;
  maxCount: number;
}

export default function Stepper(props: Props) {
  const { curCount, maxCount } = props;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [maxWidth, setMaxWidth] = useState(
    wrapperRef.current ? wrapperRef.current.offsetWidth : 0,
  );

  const stepSize = useMemo(() => {
    return Math.floor(maxWidth / (maxCount - 1));
  }, [maxWidth]);

  const calcuateMaxWidth = useCallback(() => {
    if (wrapperRef.current) {
      setMaxWidth(wrapperRef.current.offsetWidth);
    }
  }, [wrapperRef.current]);

  useEffect(() => {
    calcuateMaxWidth();
    window.addEventListener("resize", calcuateMaxWidth);
    return () => {
      window.removeEventListener("resize", calcuateMaxWidth);
    };
  }, []);

  return (
    <BarWrapper ref={wrapperRef} style={{ width: "100%" }}>
      <Bar style={{ width: `${(curCount / (maxCount - 1)) * 100}%` }}>
        {_.range(maxCount).map((v) => {
          return (
            <StepCircle
              key={v}
              className={v <= curCount ? "selected" : ""}
              style={{ left: `${stepSize * v}px` }}
            />
          );
        })}
      </Bar>
    </BarWrapper>
  );
}
