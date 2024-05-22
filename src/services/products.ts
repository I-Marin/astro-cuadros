import fetchApi from "@lib/strapi";
import type Product from "@interfaces/product";
import { API_URL } from "@config";

export const getAllProducts = async () => {
  return await getProducts({query: null, wrappedByList: null});
}

export const getProducts = async ({query, wrappedByList}) => {
  try {
    return await fetchApi<Product[]>({
      endpoint: 'products?populate=image',
      wrappedByKey: 'data',
      query,
      wrappedByList
    }) || [];
  } catch {
    return []
  }
}

export const getProduct = async ({query, wrappedByList}) => {
  return await fetchApi<Product>({
    endpoint: 'products?populate=image',
    wrappedByKey: 'data',
    query,
    wrappedByList
  }) || [];
}

export function getProductImage(product: Product) {
  const { url } =  product.attributes.image.data.attributes
  if (url.includes('strapiapp.com')) {
    return url
  }
  return `${API_URL}${url}`
}
