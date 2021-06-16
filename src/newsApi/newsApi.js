import { getApiCall} from "../utils/apiCall";
import { API_KEY, EVERYTHING, RESULTS_LIMIT} from "../constants/newsApi";
import { EMPTY_STRING_ERROR } from '../constants/errors';

const getEverything = (input) => {
    if (input.trim() === '') return Promise.reject(EMPTY_STRING_ERROR);

    return getApiCall(buildUrl(input, EVERYTHING, RESULTS_LIMIT)).then(({status, articles, message}) => {
        if (status === 'ok') return articles;
        return Promise.reject(message);
    }).catch(err => {
        throw err;
    });
}

const buildUrl = (input, type, limit) => {
    return `https://newsapi.org/v2/${type}?q=${input}&pageSize=${limit}&apiKey=${API_KEY}`
}

export { getEverything }