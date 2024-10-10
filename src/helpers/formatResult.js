export const formatResult = (result) => {
  return result.map((item) => ({
    class: item.class,
    score: item.score,
  }));
};
