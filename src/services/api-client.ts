import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "3e03305f6bf44dc394a63a071dca63c2",
    }
})