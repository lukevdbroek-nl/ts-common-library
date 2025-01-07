import ApiConfig from "./api-config";
class Api {
    private readonly _baseURL: string;
    private _config: ApiConfig;
    constructor(baseURL: string, config: ApiConfig = new ApiConfig()) {
        this._baseURL = baseURL;
        this._config = config;
    }

    async get(url: string): Promise<any> {
        try {
            const response = await fetch(`${this._baseURL}/${url}`, {
                method: 'GET',
            });
            return response.json();
        } catch (e) {
            throw e;
        }
    }
}
export default Api;