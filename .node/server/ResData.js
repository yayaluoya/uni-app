class ResData {
    data = null;
    code = 200;
    mes = '';

    constructor(data = null, code = 200, mes = '') {
        this.data = data;
        this.code = code;
        this.mes = mes;
    }

    toString() {
        return JSON.stringify(this);
    }
}

module.exports = {
    ResData,
};