const useRandom = () => {
  let randomId = () =>
    Math.floor((1 + Math.random()) * 0x1000000)
      .toString(16)
      .substring(1);

  return randomId;
}

export default useRandom;