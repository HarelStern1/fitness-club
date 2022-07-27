import { fetchData, url, exersicesOptions } from "./api";

export const getExersiceById = async (id) => {
  const data = await fetchData(url, exersicesOptions);
  const chosen = data.find((exersice) => {
    return exersice.id === id;
  });
  return chosen;
};

export const getSimilarExersicesByTarget = async (target) => {
  const data = await fetchData(url, exersicesOptions);
  const similar = data.filter((exersice) => {
    return exersice.target === target;
  });
  return similar;
};

export const getSimilarExersicesByEquipment = async (equipment) => {
  const data = await fetchData(url, exersicesOptions);
  const similar = data.filter((exersice) => {
    return exersice.equipment === equipment;
  });
  return similar;
};
