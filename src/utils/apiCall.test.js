import { getApiCall } from "./apiCall";

describe('getApiCall', () =>{

    afterEach(() => {
        global.fetch.mockClear();
        delete global.fetch;
    });

    test('should return data', async ()=>{
        const data = {test: 'test'};
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(data)
            })
        );

        const response = await getApiCall('testUrl');
        expect(response).toEqual(data);
    })

    test('should throw error', async ()=>{
        global.fetch = jest.fn(() =>
            Promise.reject('failed')
        );
        await getApiCall('testUrl').catch(err => {
            expect(err).toEqual(Error('failed'));
        })
    })

    test('should return an error and the response if the response is not ok', async () =>{
        const responseData = {
            ok: false,
            json: () => Promise.resolve({"test":test})
        }
        global.fetch = jest.fn(() =>
            Promise.resolve(responseData)
        );
        const response = await getApiCall('testUrl');
        expect(response).toEqual(Error(`Unsuccessful call response:${responseData}`));
    })
})
