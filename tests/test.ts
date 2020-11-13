import { describe, it } from "mocha";
const expect = require('chai').expect;
import { getName } from './testtest';
import { assert } from "chai";
const request = require('request');

// typescriptでfetchを動かせるようにしてみた。
import Global = NodeJS.Global;
export interface GlobalWithCognitoFix extends Global {
    fetch: any
}
declare const global: GlobalWithCognitoFix;
global.fetch = require('node-fetch').default;




describe('getName関数を見るよ', () => {


    it('userをゲットできる', async () => {
        const url = "http://localhost:3000/users";

        const res = await fetch(url);
        const data = await res.json();

        expect(res.status).equal(200)
    });



    it('userをPOSTできる', async () => {

        const adddata = {
            "firstName": "koichi",
            "lastName": "ta",
            "age": "99",
            "id": 4
        };

        const res = await fetch('http://localhost:3000/users', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(adddata),
        })

        const data = await res.json();

        expect(res.status).equal(201);

    });





    xit('0, 1, 2', function () {
        assert.equal("aaa", "taro");
    });
    xit('本当にtaroって返す？', () => {
        assert.equal(getName(), "taro");
    });
})