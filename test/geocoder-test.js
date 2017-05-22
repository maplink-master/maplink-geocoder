const chai = require("chai"),
	geocoder = require("../src"),
	ping = require ("ping")

let expect = chai.expect
let assert = chai.assert

describe("geocoder", () => {
	describe("constructor", () => {
		it("Should construct object when sent clientKey and clientSecret", () => {
			let geo = geocoder("secretPassword", "user")

			expect(geo).to.have.property("search").with.length.above(0)
			expect(geo).to.have.property("structured").with.length.above(0)
		})

		it("Should return an error if not sent clientKey and clientSecret", () => {
			expect(_ => geocoder()).to.throw(Error, /You must to send clientKey and clientSecret/)
		})
	})
	describe("ping api maplink", () => {
		it("Should recieve packages from api.maplink.com.br", (done) => {
			ping.sys.probe("api.maplink.com.br", (isAlive) => {
				expect(isAlive).to.be.true;
				done();
			});
		})
	})
})
