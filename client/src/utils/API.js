import axios from 'axios';

export default {

    //get customer to see if in DB

    getSavedCust: function () {
        return axios.get("/api/signin")
    },
    custLogin: function (signinData) {
        return axios.post("/api/signin", signinData);
    },
    saveCustomer: function (customerData) {
        return axios.post("/api/signup", customerData);
    },
    getProducts: function() {
        return axios.get("/api/products");
    },
    addToCart: function() {
        return axios.get("/api/cartProduct");
    }
    
    //post product to cart

}



