import axiosInstance from "./axiosInstance";

// Fetch blog categories
export const fetchCategories = async (signal) => {
  try {
    const { data } = await axiosInstance.get(
      "/api/worx-sales-category",
      {
        signal,
      }
    );
    return data;
  } catch (error) {
    throw new Error(`Categories API Error: ${error.message}`);
  }
};

// Fetch whitePaper categories
export const fetchWhitePaperCategories = async (signal) => {
  try {
    const { data } = await axiosInstance.get(
      "/api/worx-sales-category",
      { signal }
    );
    return data;
  } catch (error) {
    throw new Error(`Categories API Error: ${error.message}`);
  }
};
