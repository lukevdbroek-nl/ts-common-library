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
                headers: {
                    ...this._config.requestHeaders
                },
            });
            return response.json();
        } catch (e) {
            throw e;
        }
    }

    async set(url: string, body: any): Promise<any> {
        try {
            const response = await fetch(`${this._baseURL}/${url}`, {
                method: 'POST',
                headers: {
                    ...this._config.requestHeaders
                },
                body: JSON.stringify(body)
            });
            return response.json();
        } catch (e) {
            throw e;
        }
    }

    async update(url: string, body: any): Promise<any> {
        try {
            const response = await fetch(`${this._baseURL}/${url}`, {
                method: 'PUT',
                headers: {
                    ...this._config.requestHeaders
                },
                body: JSON.stringify(body)
            });
            return response.json();
        } catch (e) {
            throw e;
        }
    }

    async delete(url: string): Promise<any> {
        try {
            const response = await fetch(`${this._baseURL}/${url}`, {
                method: 'DELETE',
                headers: {
                    ...this._config.requestHeaders
                },
            });
            return response.json();
        } catch (e) {
            throw e;
        }
    }
}
export default Api;