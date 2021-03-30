'use strict';


const { server } = require('../src/server.js');
const superTest = require('supertest');
const request = superTest(server);

// const { response } = require('express');

let id;

describe('api server', () => {

    it('bad routes', async () => {
        const response = await request.get('/foo');
        expect(response.status).toEqual(404);
    });

    it('bad method', async () => {
        const response = await request.post('/error');
        expect(response.status).toEqual(404);
    });

    it('Create a clothe record using POST', async () => {
        const response = await request.post('/api/v1/clothes').send({ type: 'shirt' });
        expect(response.status).toEqual(201);
        expect(response.body.data.type).toEqual('shirt');
        id = response.body.id;
    });

    it('Read a list of clothes records using GET', async () => {
        const response = await request.get('/api/v1/clothes');
        expect(response.status).toEqual(200);
    });

    it('Read a clothe record using GET', async () => {
        const response = await request.get(`/api/v1/clothes/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.data.type).toEqual('shorts');
    });

    it('Update a clothe record using PUT', async () => {
        const response = await request.put(`/api/v1/clothes/${id}`).send({ type: 'shorts' });
        expect(response.status).toEqual(200);
        expect(response.body.data.type).toEqual('shorts');
    });

    it('Destroy a clothe record using DELETE', async () => {
        const response = await request.delete(`/api/v1/clothes/${id}`);
        expect(response.body).toEqual(null);
    });



    it('Create a food record using POST', async () => {
        const response = await request.post('/api/v1/food').send({ name: 'pizza' });
        expect(response.status).toEqual(201);
        expect(response.body.data.name).toEqual('pizza');
        id = response.body.id;
    });

    it('Read a list of food records using GET', async () => {
        const response = await request.get('/api/v1/food');
        expect(response.status).toEqual(200);
    });

    it('Read a food record using GET', async () => {
        const response = await request.get(`/api/v1/food/${id}`);
        expect(response.status).toEqual(200);
        expect(response.body.data.name).toEqual('chocolate');
    });

    it('Update a clothe record using PUT', async () => {
        const response = await request.put(`/api/v1/food/${id}`).send({ name: 'pasta' });
        expect(response.status).toEqual(200);
        expect(response.body.data.name).toEqual('pasta');
    });

    it('Destroy a clothe record using DELETE', async () => {
        const response = await request.delete(`/api/v1/food/${id}`);
        expect(response.body).toEqual(null);
    });

});







