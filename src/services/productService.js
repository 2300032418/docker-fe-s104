import axios from "axios";

const API_BASE_URL = "http://ec2-18-215-144-186.compute-1.amazonaws.com:8081/api/products";

export const getProducts = async (category = "") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductImageUrl = (imagePath) => {
  return `http://ec2-18-215-144-186.compute-1.amazonaws.com:8080/api/products/images/${imagePath}`;
};
