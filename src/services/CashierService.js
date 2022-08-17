import axios from "axios";

const CUSTOMER_BASE_REST_API_URL = 'http://localhost:8080/api/v1/cashiers'

class CashierService{

    getAllCustomers(){
        return axios.get(CUSTOMER_BASE_REST_API_URL)
    }

    createCashier(cashier){
        return axios.post(CUSTOMER_BASE_REST_API_URL, cashier)
    }

}
export default new CashierService()