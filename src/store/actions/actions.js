import axios from "axios";
import { productActions } from "../store";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const {data}  = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=ki");
      // const data2 = data.json()
      console.log(data)
      dispatch(productActions.fetchProducts(data));
    } catch (err) {
      console.log(err);
      dispatch(productActions.fetchProductsError(err.response && err.response.data.message
        ? err.response.data.message
        : err.message,));
  }
}
}

export const Filter =(cate)=>{
    return async(dispatch)=>{

        console.log(cate)

        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`)
        console.log(data)

        dispatch(productActions.fetchProducts(data))
    }
}


export const fetchSingleProduct = (id) => {
  console.log(id)
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        dispatch(productActions.singleFetch(data));
        console.log(data)
      } catch (err) {
        console.log(err);
        dispatch(productActions.singleFetchError(err.response && err.response.data.message
          ? err.response.data.message
          : err.message,));
    }
  }
}



export const searchDrink = (search) => {
  return async (dispatch) => {
      console.log(search)
      try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        console.log(data)
        dispatch(productActions.fetchProducts(data));
      } catch (err) {
        console.log(err);
        dispatch(productActions.productSearchError(err.response && err.response.data.message
          ? err.response.data.message
          : err.message,));
    }
  }
}