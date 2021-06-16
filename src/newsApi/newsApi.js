import { getApiCall} from "../utils/apiCall";
import { API_KEY, HEADLINES} from "../constants/newsApi";

const getTopHeadLines = (input) => {
    getApiCall(buildUrl(input, HEADLINES)).then(response => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    });
}

const buildUrl = (input, type) => {
    return `https://newsapi.org/v2/${type}?q=${input}&apiKey=${API_KEY}`
}