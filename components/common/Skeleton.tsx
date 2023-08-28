import { Skeleton } from "@rneui/base";
import React, { useId } from "react";
import FlexContainer from "./FlexContainer";

interface SkeletonCustomGroupInterface {
  repeat: number;
}
export default function SkeletonCustomGroup({
  repeat = 1,
}: SkeletonCustomGroupInterface) {
  const id = useId();
  return (
    <>
      <FlexContainer flexDirection="column" gap={16}>
        {Array.from(Array(repeat).keys()).map((el, i) => (
          <Skeleton
            key={id + i}
            animation="pulse"
            height={200}
            style={{ borderRadius: 16 }}
            skeletonStyle={{ borderRadius: 16, height: "100%" }}
          />
        ))}
      </FlexContainer>
    </>
  );
}
