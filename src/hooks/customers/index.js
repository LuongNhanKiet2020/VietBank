import customerAPI from '../../api/customer'
import { useQuery } from "react-query";
import isEmpty from '../../utils/verify'

const key = "ThuDong2021/ReponsetpttptKiemTraDKTK";
const useCustomers = (params) =>{
    return useQuery([key,params], customerAPI.getCustomerAPI, {
        enabled: !isEmpty(params)
    })
}

export default useCustomers;
  // "proxy":"https://portaltest.vietbank.com.vn",
