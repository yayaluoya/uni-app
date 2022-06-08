import { httpStatus } from "@/utils/httpStatus";
import { BaseApiCon as BaseApiCon_ } from "yayaluoya-tool/dist/uni/BaseApiCon";
import { ResData } from "yayaluoya-tool/dist/http/ResData";
import { ApiT } from "./ApiT";

/**
 * 基类api控制器
 */
export class BaseApiCon extends BaseApiCon_ {

    /** 可配置选项 */
    get op() {
        return {
            baseURL: 'http://localhost:1234/',
            timeout: 1000 * 60,
        };
    }

    /** 获取数据中的数据 */
    requestDataData(op) {
        return this.requestData(op).then(({ data }) => data);
    }


    /**
     * get请求获取数据
     * @param _op 请求配置 
     * @param data 
     * @param headers 
     * @returns 
     */
    getData(_op) {
        return this.requestDataData({
            ..._op,
            method: 'get',
        });
    }
    /**
     * post请求获取数据
     * @param _op 请求配置 
     * @param data 
     * @param headers 
     * @returns 
     */
    postData(_op) {
        return this.requestDataData({
            ..._op,
            method: 'post',
        });
    }
    /**
     * put请求获取数据
     * @param _op 请求配置 
     * @param data 
     * @param headers 
     * @returns 
     */
    putData(_op) {
        return this.requestDataData({
            ..._op,
            method: 'put',
        });
    }
    /**
     * delete请求获取数据
     * @param _op 请求配置 
     * @param data 
     * @param headers 
     * @returns 
     */
    deleteData(_op) {
        return this.requestDataData({
            ..._op,
            method: 'delete',
        });
    }

    /** 
     * 响应数据获取
     * 如果响应成功的话返回 ResData
     * 如果响应失败的话抛出ResData的异常
     */
    resData_(data, con, res) {
        let resData = new ResData(data?.data, data?.code, data?.msg, data?.time);
        if (resData.status != httpStatus.OK) {
            throw resData;
        }
        return resData;
    }

    async request_(c) {
        c.url = ApiT.join(c.baseURL, c.url);
        return c;
    }
}