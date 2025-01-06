import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '72a16cf6149341609e76caf11c4abf15'
    }
})