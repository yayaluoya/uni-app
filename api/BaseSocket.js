import { BaseEvent } from "yayaluoya-tool/dist/BaseEvent";

const wsUrl = '192.168.200.32:3601';

/**
 * 基类webSocket
 */
export class BaseSocket extends BaseEvent {
    static wsp;
    static iList = [];

    constructor() {
        super();
        BaseSocket.iList.push(this);
    }

    static start(id) {
        uni.connectSocket({
            url: `ws://${wsUrl}/wx/${id}`,
        });
        this.wsp = new Promise((r, e) => {
            let t = setTimeout(() => {
                console.error('webSocket连接超时');
                e();
            }, 1000 * 60);
            //
            uni.onSocketOpen(function (res) {
                clearTimeout(t);
                r();
            });
        });
        uni.onSocketMessage((res) => {
            this.distributeEvent(res.data);
        });
        this.palpitate();
    }

    static palpitateTime;
    /** 发送心跳包 */
    static palpitate() {
        this.wsp.then(() => {
            this.palpitateTime = setInterval(() => {
                uni.sendSocketMessage({
                    data: 'palpitate',
                });
            }, 1000 * 50);
        });
    }

    /** 停止发送心跳 */
    static close() {
        clearInterval(this.palpitateTime);
        this.wsp.then(() => {
            uni.closeSocket()
        });
    }

    /** 分发事件 */
    static distributeEvent(data) {
        try {
            data = JSON.parse(data);
        } catch {
            console.error('解析消息失败');
        }
        //
        BaseSocket.iList.forEach(_ => {
            _.emit('msg', data);
        });
    }
}