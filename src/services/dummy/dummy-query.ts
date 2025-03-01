import { ENDPOINT } from "@/constants/endpoint";
import { TDummyResponse } from "@/types/dummy";
import { queryOptions } from "@tanstack/react-query";

import axios from "axios";

// ---------------------------------------------------------------------------------

const fetchDummy = async () => {
  const { data } = await axios.get<TDummyResponse>(ENDPOINT.dummy);

  console.log("data :>> ", data);

  return data;
};

// ---------------------------------------------------------------------------------

const dummyKeys = {
  all: () => ["dummy"] as const,

  dummyKeys: () => [...dummyKeys.all()],
  dummyOption: () =>
    queryOptions({
      queryKey: [...dummyKeys.all(), ENDPOINT.dummy] as const,
      queryFn: () => fetchDummy(),
    }),
};

export { dummyKeys };
