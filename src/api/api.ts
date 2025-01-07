import ApiConfig from "./api-config";
class Api {
    private _config: ApiConfig;
    constructor(config: ApiConfig = new ApiConfig()) {
        this._config = config;
    }

    async get(url: string) {
        try {
            console.log(`${this._config.baseURL}/${url}`);
            const response = await fetch(`${this._config.baseURL}/${url}`, {
                method: 'GET',
                headers: {
                    ...this._config.requestHeaders
                },
            });
            return await response.json();
        } catch (e) {
            throw e;
        }
    }

    async set(url: string, body: any) {
        try {
            const response = await fetch(`${this._config.baseURL}/${url}`, {
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

    async update(url: string, body: any) {
        try {
            const response = await fetch(`${this._config.baseURL}/${url}`, {
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

    async delete(url: string) {
        try {
            const response = await fetch(`${this._config.baseURL}/${url}`, {
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