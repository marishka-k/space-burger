export const ORDERS_CONNECTION_SUCCESS = "ORDERS_CONNECTION_SUCCESS";
export const ORDERS_CONNECTION_INIT = "ORDERS_CONNECTION_INIT";
export const ORDERS_CONNECTION_ERROR = "ORDERS_CONNECTION_ERROR";
export const ORDERS_CONNECTION_CLOSED = "ORDERS_CONNECTION_CLOSED";
export const ORDERS_GET_ORDERS = "ORDERS_GET_ORDERS";
export const ORDERS_SEND_ORDERS = "ORDERS_SEND_ORDERS";

const onlyOneTypeActionCreator = (type) => {
  return {
    type: type,
  };
};

const payloadActionCreator = (type, payload) => {
  return {
    type: type,
    payload: payload,
  };
};

export const ordersConnectionInit = (payload) => {
  return payloadActionCreator(ORDERS_CONNECTION_INIT, payload);
};

export const ordersConnectionClosed = () => {
  return onlyOneTypeActionCreator(ORDERS_CONNECTION_CLOSED);
};

export const ordersGetMessage = (order) => {
  return payloadActionCreator(ORDERS_GET_ORDERS, order);
};

export const ordersSendMessage = (order) => {
  return payloadActionCreator(ORDERS_SEND_ORDERS, order);
};
