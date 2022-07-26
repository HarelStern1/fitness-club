import { fetchData, url, exersicesOptions } from "./api";

export const getExersiceById = async (id) => {
  const data = await fetchData(url, exersicesOptions);
  const chosen = data.find((exersice) => {
    return exersice.id === id;
  });
  return chosen;
};
