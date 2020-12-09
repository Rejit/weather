const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');

describe("deploy test", function () {
    const today = () => {
        const date = new Date();
        return `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}`;
    };
    const path = `./files/Dallas ${today()} weather.csv`;


    function verifyAndRun() {
        return new Promise(resolve => {
            expect(fs.existsSync(path)).to.be.false;
            require('./../index');
        });
    }

    async function verifyDocCreated() {
        await verifyAndRun();
        expect(fs.existsSync(path)).to.be.true;
        
    }

    it("should be able to run index", async () => {
        verifyDocCreated();
    });
});