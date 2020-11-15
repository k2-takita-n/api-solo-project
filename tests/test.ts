import "mocha";
import "chai";
import "chai-http";

import { describe, it } from "mocha";
const expect = require('chai').expect;
import { getName } from './testtest';
import { assert } from "chai";
const request = require('request');

import { getRepository, Repository, Not, IsNull } from "typeorm";
import { Application } from "express";

// import DatabaseConnectionManager from "../src/database";
// import {User} from "../src/entity/User";
// import {Maker} from "../src/entity/MakerModel";
// import {Ski} from "../src/entity/SkiModel";


// typescriptでfetchを動かせるようにしてみた。
import Global = NodeJS.Global;
export interface GlobalWithCognitoFix extends Global {
    fetch: any
}
declare const global: GlobalWithCognitoFix;
global.fetch = require('node-fetch').default;


xdescribe('makerを見るよ', () => {

    it('全てのmakerをゲットできる', async () => {
        const url = "http://localhost:3000/makers";

        const res = await fetch(url);
        const data = await res.json();

        expect(res.status).equal(200)
    });


    it('1つのmakerをゲットできる', async () => {
        const id = 2;
        const makerName="HEAD"
        const url = "http://localhost:3000/makers/" + id;

        const res = await fetch(url);
        const data = await res.json();

        expect(res.status).equal(200)
        expect(data.MakerName).to.equal(makerName);
    });


    xit('makerを削除できる', async () => {
        const id = 2;
        const url = "http://localhost:3000/makers/" + id;

        const res = await fetch(url, {
            method: `DELETE`,
        })

        expect(res.status).equal(200)
    });

    xit('makerにPOSTできる', async () => {
        const url = "http://localhost:3000/makers";
        const addMaker = "testMaker"
        const addurl = url + "/" + addMaker

        const adddata = {
            "MakerName": addMaker,
            "Detail": "testData!"
        };

        const res = await fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(adddata),
        })

        //検証
        expect(res.status).equal(200);

        const res2 = await fetch(url);
        const data = await res2.json();

        console.log(data);
        expect(res2.status).equal(200);

        const retdata = data.filter((value) => {
            return value.MakerName == addMaker;
        })

        expect(retdata.length).to.be.at.least(1);

        // TearDown
        // expect(data.MakerName).to.equal("HEAD");

        // //TearDown 
        // const res3 = await fetch(addurl, {
        //     method: `DELETE`,
        // })

    });
});

describe('makerを見るよ', () => {

    it('全てのmakerをゲットできる', async () => {
        const url = "http://localhost:3000/skis";

        const res = await fetch(url);
        const data = await res.json();

        expect(res.status).equal(200)
    });

    it('1つのmakerをゲットできる', async () => {
        const id = 3;
        const skiName="KS-XX"
        const url = "http://localhost:3000/skis/" + id;

        console.log(url);
        const res = await fetch(url);
        const data = await res.json();

        expect(res.status).equal(200)
        expect(data.Name).to.equal(skiName);
    });


    xit('makerを削除できる', async () => {
        const id = 8;
        const url = "http://localhost:3000/skis/" + id;

        const res = await fetch(url, {
            method: `DELETE`,
        })

        expect(res.status).equal(200)
    });

    xit('makerにPOSTできる', async () => {
        const url = "http://localhost:3000/skis";
        const addSki = "testSki"

        const adddata = {
            "Name": addSki,
            "Detail": "testData!",
            "makerId": 99
        };

        const res = await fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(adddata),
        })

        //検証
        expect(res.status).equal(200);

        const res2 = await fetch(url);
        const data = await res2.json();

        expect(res2.status).equal(200);

        const retdata = data.filter((value) => {
            return value.Name == addSki;
        })

        expect(retdata.length).to.be.at.least(1);

        // TearDown
        // expect(data.MakerName).to.equal("HEAD");

        // //TearDown 
        // const res3 = await fetch(addurl, {
        //     method: `DELETE`,
        // })

    });



})