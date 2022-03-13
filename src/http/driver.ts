import APIError from "../error";
import { IDriver } from "../response/driver";
import BaseHTTPClient from "./base";

export default class DriverHTTPClient extends BaseHTTPClient {
    get(market: string, path: string): Promise<IDriver> {
        return new Promise<IDriver>((resolve, reject) => {
            const response = this.makeCall<null>(market, path);
            response
                .then((d) => {
                    resolve(<IDriver>(<unknown>d));
                })
                .catch((e) => {
                    if (e instanceof APIError) {
                        if (e.httpStatus === 404) {
                            reject(new Error("Driver not found"));
                            return;
                        }
                    }

                    reject(e);
                });
        });
    }
}
