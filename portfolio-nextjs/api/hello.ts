import axiosConfig from "../axiosConfig";

export default async function handler() {
  try {
    const { data } = await axiosConfig.get("/api/v1/hello");
    return data;
  } catch (error) {
    console.log(error);
    return { error: "failed to fetch data" };
  }
}
