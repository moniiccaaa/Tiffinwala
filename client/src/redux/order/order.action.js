import axios from "axios";
import {
  orderRequest,
  orderFail,
  addOrderSuccess,
  orderSuccess,
  userOrderSuccess,
  updateOrderSuccess,
  updateUserOrderSuccess,
} from "./order.reducer";

export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch(orderRequest());
    const orders = await axios({
      method: "GET",
      url: `https://tiffinwala-wipj.onrender.com/api/v1/order/provider`,
    });
    dispatch(orderSuccess(orders.data));
  } catch (error) {
    return dispatch(orderFail(error.response.data.message));
  }
};
export const getUserOrders = () => async (dispatch) => {
  try {
    dispatch(orderRequest());
    const orders = await axios({
      method: "GET",
      url: "https://tiffinwala-wipj.onrender.com/api/v1/order/user",
    });
    return dispatch(userOrderSuccess(orders.data));
  } catch (error) {
    return dispatch(orderFail(error.response.data.message));
  }
};
export const addOrder = (data) => async (dispatch) => {
  try {
   
    dispatch(orderRequest());
    const order = await axios({
      method: "POST",
      url: `https://tiffinwala-wipj.onrender.com/api/v1/order`,
      data,
    });
    dispatch(addOrderSuccess(order.data));
  } catch (error) {
    return dispatch(orderFail(error.response.data.message));
  }
};
export const updateOrder = (data) => async (dispatch) => {
  try {
    dispatch(orderRequest());
  
    const order = await axios({
      method: "PUT",
      url: `https://tiffinwala-wipj.onrender.com/api/v1/order/updateStatus`,
      data,
    });
    dispatch(updateOrderSuccess(order.data));
  } catch (error) {
    return dispatch(orderFail(error.response?.data?.message));
  }
};
export const updateUserOrder = (data) => async (dispatch) => {
  try {
    dispatch(orderRequest());
    const order = await axios({
      method: "PUT",
      url: `https://tiffinwala-wipj.onrender.com/api/v1/order/updateStatus`,
      data,
    });
    console.log("order success --->"+ order.data);
    dispatch(updateUserOrderSuccess(order.data));
  } catch (error) {
    console.log("order fail response--->"+ error.response);
    console.log("order fail responseData--->"+ error.response.data);


    return dispatch(orderFail(error.response.data.message));
  }
};
export const deleteOrder = (data) => async (dispatch) => {
  try {
    dispatch(orderRequest());
    await axios({
      method: "DELETE",
      url: `https://tiffinwala-wipj.onrender.com/api/v1/order/${data.order._id}`,
    });
  } catch (error) {
    return dispatch(orderFail(error.response.data.message));
  }
};
