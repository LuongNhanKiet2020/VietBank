import axoisClient from "./axiosClient";

const END_POINT = "ThuDong2021/ReponsetpttptKiemTraDKTK"

const customerAPI = {
    getCustomerAPI: async () => {
       return await axoisClient.get(END_POINT,{params: {inAcct:"000001844686",inmacn:"5",macd:"C109"}});
    } 
}

export default customerAPI;
