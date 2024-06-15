const request = require('supertest');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/sample.json');

const middlewares = jsonServer.defaults();
const port = 3000;

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use(router);

function hasProperty(obj, match) {
    return Object.keys(obj).some(key => key.toLowerCase().includes(match.toLowerCase()));
}

describe('GET /users', () => {
    let testServer;

    beforeAll((done) => {
        testServer = server.listen(port, done);
    });

    afterAll((done) => {
        testServer.close(done);
    });

    it('users should have at least 3 users', async () => {
        const users = await request(server).get('/users');

        expect(users.status).toBe(200);
        expect(users.body).toBeInstanceOf(Array);
        expect(users.body.length).toBeGreaterThanOrEqual(3);
    });

    it('users should have 5 attributes', async () => {
        const users = await request(server).get('/users');

        expect(users.status).toBe(200);
        expect(users.body).toBeInstanceOf(Array);

        users.body.forEach(user => {
            expect(user).toHaveProperty('id');
            expect(hasProperty(user, 'name')).toBe(true);
            expect(hasProperty(user, 'email')).toBe(true);
            expect(hasProperty(user, 'phone') || hasProperty(user, 'number')).toBe(true);
            expect(hasProperty(user, 'address')).toBe(true);
        });
    });
});

describe('GET /products', () => {
    let testServer;

    beforeAll((done) => {
        testServer = server.listen(port, done);
    });

    afterAll((done) => {
        testServer.close(done);
    });

    it('products should have at least 10 products', async () => {
        const products = await request(server).get('/products');

        expect(products.status).toBe(200);
        expect(products.body).toBeInstanceOf(Array);
        expect(products.body.length).toBeGreaterThanOrEqual(10);
    });

    it('products should have 5 attributes', async () => {
        const products = await request(server).get('/products');

        expect(products.status).toBe(200);
        expect(products.body).toBeInstanceOf(Array);

        products.body.forEach(product => {
            expect(product).toHaveProperty('id');
            expect(hasProperty(product, 'name') || hasProperty(product, 'product')).toBe(true);
            expect(hasProperty(product, 'quantity') || hasProperty(product, 'stock')).toBe(true);
            expect(hasProperty(product, 'price')).toBe(true);
            expect(hasProperty(product, 'sku') || hasProperty(product, 'number')).toBe(true);
        });
    });
});

describe('GET /orders', () => {
    let testServer;

    beforeAll((done) => {
        testServer = server.listen(port, done);
    });

    afterAll((done) => {
        testServer.close(done);
    });

    it('orders should have at least 15 orders', async () => {
        const orders = await request(server).get('/orders');

        expect(orders.status).toBe(200);
        expect(orders.body).toBeInstanceOf(Array);
        expect(orders.body.length).toBeGreaterThanOrEqual(15);
    });

    it('orders should have 3 attributes', async () => {
        const orders = await request(server).get('/orders');

        expect(orders.status).toBe(200);
        expect(orders.body).toBeInstanceOf(Array);

        orders.body.forEach(product => {
            expect(product).toHaveProperty('id');
            expect(hasProperty(product, 'product')).toBe(true);
            expect(hasProperty(product, 'user')).toBe(true);
        });
    });
});

describe('GET /transactions', () => {
    let testServer;

    beforeAll((done) => {
        testServer = server.listen(port, done);
    });

    afterAll((done) => {
        testServer.close(done);
    });

    it('transactions should have at least 3 transactions', async () => {
        const transactions = await request(server).get('/transactions');

        expect(transactions.status).toBe(200);
        expect(transactions.body).toBeInstanceOf(Array);
        expect(transactions.body.length).toBeGreaterThanOrEqual(3);
    });

    it('transactions should have 5 attributes', async () => {
        const transactions = await request(server).get('/transactions');

        expect(transactions.status).toBe(200);
        expect(transactions.body).toBeInstanceOf(Array);

        transactions.body.forEach(transaction => {
            expect(transaction).toHaveProperty('id');
            expect(hasProperty(transaction, 'user')).toBe(true);
            expect(hasProperty(transaction, 'orders')).toBe(true);
            expect(hasProperty(transaction, 'total') || hasProperty(transaction, 'price')).toBe(true);
            expect(hasProperty(transaction, 'address') || hasProperty(transaction, 'billing')).toBe(true);
        });
    });

    it('transactions orders should have at least 5 orders', async () => {
        const transactions = await request(server).get('/transactions');

        expect(transactions.status).toBe(200);
        expect(transactions.body).toBeInstanceOf(Array);

        transactions.body.forEach(transaction => {
            expect(transaction.orders.length).toBeGreaterThanOrEqual(5);
        });
    });

    it('transactions orders should product attribute', async () => {
        const transactions = await request(server).get('/transactions');

        expect(transactions.status).toBe(200);
        expect(transactions.body).toBeInstanceOf(Array);

        transactions.body.forEach(transaction => {
            transaction.orders.forEach(order => {
                expect(hasProperty(order, 'product')).toBe(true);
            });
        });
    });
});
