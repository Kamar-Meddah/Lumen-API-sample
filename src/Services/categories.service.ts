import {AxiosPromise} from 'axios';
import {HTTP} from '@/Services/http-common';

export default class CatgeoriesService {

    public constructor(private http = HTTP) {
        // this.http.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    }

    public all(): AxiosPromise<any> {
        return this.http.get(`/categories/all`);
    }

}
