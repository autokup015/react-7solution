import { ENDPOINT } from "@/constants/endpoint";
import { TDummyResponse, TTransformDataResponse } from "@/types/dummy";
import { queryOptions } from "@tanstack/react-query";

import axios from "axios";

const REGEX_REMOVE_SPECIAL_CHARACTOR = / /g;

type TAgeTransform = Array<number> | string;

type TFirstTransformData = TTransformDataResponse<TAgeTransform>;

// ---------------------------------------------------------------------------------

const fetchDummy = async (): Promise<TDummyResponse> => {
  const { data } = await axios.get<TDummyResponse>(ENDPOINT.dummy);

  return data;
};

const transformData = (data: TDummyResponse["users"]) => {
  let firstTransform: Array<TFirstTransformData> = [];

  data.forEach((value) => {
    const getDepartmentKey = value.company.department
      .replace(REGEX_REMOVE_SPECIAL_CHARACTOR, "")
      .toLowerCase();

    const isDuplicate = firstTransform.some((item) => item[getDepartmentKey]);

    const fullName = `${value.firstName}_${value.lastName}`.toLowerCase();
    const fullAddress = `${value.address.address} ${value.address.city} ${value.address.country}`;

    if (isDuplicate) {
      firstTransform = firstTransform.map((item) => {
        if (item[getDepartmentKey]) {
          // ! no condition
          item[getDepartmentKey][value.gender] += 1;

          item[getDepartmentKey].addressUser[fullName] = fullAddress;

          // ! Add age before condition sort
          if (typeof item[getDepartmentKey].ageRange === "string") {
            item[getDepartmentKey].ageRange = item[getDepartmentKey].ageRange
              .split("-")
              .map(Number);
          }

          item[getDepartmentKey].ageRange = [
            ...item[getDepartmentKey].ageRange,
            value.age,
          ];

          // ! condition
          const getHair =
            item[getDepartmentKey].hair[value.hair.color.toLowerCase()];

          // hair
          item[getDepartmentKey].hair[value.hair.color.toLowerCase()] = getHair
            ? getHair + 1
            : 1;

          // ! Map to string age
          const sortAge = item[getDepartmentKey].ageRange
            .map(Number)
            .sort((a, b) => a - b);

          const getFirstAge = `${sortAge.shift()}-${sortAge.pop()}`;

          item[getDepartmentKey].ageRange = getFirstAge;
        }

        return item;
      });
    }

    if (!isDuplicate) {
      const obj: TFirstTransformData = {
        [getDepartmentKey]: {
          male: value.gender === "male" ? 1 : 0,
          female: value.gender === "female" ? 1 : 0,
          ageRange: [value.age],
          hair: {
            [value.hair.color.toLowerCase()]: 1,
          },
          addressUser: {
            [fullName]: fullAddress,
          },
        },
      };

      firstTransform.push(obj);
    }
  });

  // ! Map final data

  return firstTransform;
};

// ---------------------------------------------------------------------------------

const dummyKeys = {
  all: () => ["dummy"] as const,

  dummyKeys: () => [...dummyKeys.all()],
  dummyOption: () =>
    queryOptions({
      queryKey: [...dummyKeys.all(), ENDPOINT.dummy] as const,
      queryFn: () => fetchDummy(),
      select: (response) => transformData(response.users),
    }),
};

export { dummyKeys };
