import sendAPI from "./Network";

export const getAPI = async () => {
  try {
    const res = await sendAPI({ url: "api" });
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const postAPI = async (...arg) => {
    try {
      const res = await sendAPI({ url: "api/post", method: 'post', options: {
        data: {...arg[0]}
      } });
      return res.data;
    } catch (err) {
      throw err;
    }
  };
