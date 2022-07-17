import pianos from "../data/productsData.json";

export const getPianos = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(pianos);
    }, 2000);
  });
};
export const getPiano = (id) => {
  return new Promise((res) => {
    setTimeout(() => {
      id = Number(id);
      const requestedPiano = pianos.find((piano) => piano.id === id);
      res(requestedPiano);
    }, 2000);
  });
};
