import { dummyKeys } from "@/services/dummy";
import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";

const DummyView: FC = () => {
  const { data: dummyData, isSuccess } = useQuery(dummyKeys.dummyOption());

  if (!isSuccess) {
    return <>loading ...</>;
  }

  return (
    <div>
      <pre data-testid="pre-response">{JSON.stringify(dummyData, null, 4)}</pre>
    </div>
  );
};

export default DummyView;
