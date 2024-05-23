const wttsMiddlewares = require('../middlewares/wttsMiddlewares');

const baseWtts = {
    "usuario": 'Juscelino',
    "concessionaria": 0.74906,
    "local": [
        {
            "nome": "quarto",
            "equipamentos": [
                {
                    "nome": 'PC',
                    "potencia": '600',
                    "horas": '8',
                    "dias": '7'
                }
            ]
        },
    ]
}

const next = () => { };

describe('teste da validação do middleware', () => {
    it('o body esta vazio', () => {
        let wtts = JSON.parse(JSON.stringify(baseWtts));
        wtts = {}
        const req = {
            body: wtts
        };
        const resp = new ResponseMock();

        wttsMiddlewares.validateJson(req, resp, next);

        expect(resp._status).toBe(400);
        expect(resp._json).toStrictEqual({ error: 'Body não foi encontrado.' })
    }),
    it('o usuario esta vazio', () => {
        let wtts = JSON.parse(JSON.stringify(baseWtts));
        wtts.usuario = '';

        const req = {
            body: wtts
        };
        const resp = new ResponseMock();

        wttsMiddlewares.validateJson(req, resp, next);

        expect(resp._status).toBe(400);
        expect(resp._json).toStrictEqual({ error: 'Usuário não foi encontrado.' })
    }),
    it('a concessionaria esta vazio', () => {
        let wtts = JSON.parse(JSON.stringify(baseWtts));
        wtts.concessionaria = '';

        const req = {
            body: wtts
        };
        const resp = new ResponseMock();

        wttsMiddlewares.validateJson(req, resp, next);

        expect(resp._status).toBe(400);
        expect(resp._json).toStrictEqual({ error: 'Concessionaria não foi encontrado.' })
    }),
    it('o local esta vazio', () => {
        let wtts = JSON.parse(JSON.stringify(baseWtts));
        wtts.local = [];

        const req = {
            body: wtts
        };
        const resp = new ResponseMock();

        wttsMiddlewares.validateJson(req, resp, next);

        expect(resp._status).toBe(400);
        expect(resp._json).toStrictEqual({ error: 'Local não foi encontrado.' })
    }),
    it('o nome do local esta vazio', () => {
        let wtts = JSON.parse(JSON.stringify(baseWtts));
        wtts.local[0].nome = '';

        const req = {
            body: wtts
        };
        const resp = new ResponseMock();

        wttsMiddlewares.validateJson(req, resp, next);

        expect(resp._status).toBe(400);
        expect(resp._json).toStrictEqual({ error: 'Nome do local não foi encontrado.' })
    }),
    it('os equipamentos estao vazios', () => {
        let wtts = JSON.parse(JSON.stringify(baseWtts));
        wtts.local[0].equipamentos = [];
    

        const req = {
            body: wtts
        };
        const resp = new ResponseMock();

        wttsMiddlewares.validateJson(req, resp, next);

        expect(resp._status).toBe(400);
        expect(resp._json).toStrictEqual({ error: 'Equipamentos não foi encontrado.' })
    }),
    it('o nome do equipamento esta vazio', () => {
        let wtts = JSON.parse(JSON.stringify(baseWtts));
        wtts.local[0].equipamentos[0].nome = '';

        const req = {
            body: wtts
        };
        const resp = new ResponseMock();

        wttsMiddlewares.validateJson(req, resp, next);

        expect(resp._status).toBe(400);
        expect(resp._json).toStrictEqual({ error: 'O(a) nome do equipamento não foi encontrado.' })
    }),
    it('a potencia do equipamento esta vazia', () => {
        let wtts = JSON.parse(JSON.stringify(baseWtts));
        wtts.local[0].equipamentos[0].potencia = '';

        const req = {
            body: wtts
        };
        const resp = new ResponseMock();

        wttsMiddlewares.validateJson(req, resp, next);

        expect(resp._status).toBe(400);
        expect(resp._json).toStrictEqual({ error: 'O(a) potencia do equipamento não foi encontrado.' })
    }),
    it('as horas do equipamento estao vazias', () => {
        let wtts = JSON.parse(JSON.stringify(baseWtts));
        wtts.local[0].equipamentos[0].horas = '';

        const req = {
            body: wtts
        };
        const resp = new ResponseMock();

        wttsMiddlewares.validateJson(req, resp, next);

        expect(resp._status).toBe(400);
        expect(resp._json).toStrictEqual({ error: 'O(a) horas do equipamento não foi encontrado.' })
    }),
    it('os dias do equipamento estao vazios', () => {
        let wtts = JSON.parse(JSON.stringify(baseWtts));
        wtts.local[0].equipamentos[0].dias = '';

        const req = {
            body: wtts
        };
        const resp = new ResponseMock();

        wttsMiddlewares.validateJson(req, resp, next);

        expect(resp._status).toBe(400);
        expect(resp._json).toStrictEqual({ error: 'O(a) dias do equipamento não foi encontrado.' })
    })
})

class ResponseMock {
    _status = '';
    _json = {};
    status(value) {
        this._status = value;
        return this;
    }

    json(value) {
        this._json = value;
        return this;
    }
}