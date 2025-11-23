import axiosClient from "./axiosClient";

const orderService = {
    getMyOrders: () => axiosClient.get("/orders/my"),
    createOrder: (data) => axiosClient.post("/orders", data),
    updateOrder: (id, data) => axiosClient.put(`/orders/${id}`, data),
    deleteOrder: (id) => axiosClient.delete(`/orders/${id}`),
};

export default orderService;
