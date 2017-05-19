const chai = require("chai"),
	geocoder = require("../src")

let expect = chai.expect

describe("geocoder", () => {
	describe("constructor", () => {
		it("Should construct object when sent clientKey and clientSecret", () => {
			let geo = geocoder("user", "secretPassword")

			expect(geo).to.have.property("search").with.length.above(0)
			expect(geo).to.have.property("geocode").with.length.above(0)
		})

		it("Should return an error if not sent clientKey and clientSecret", () => {
			expect(_ => geocoder()).to.throw(Error, "You must to send clientKey and clientSecret.")
		})
	})
})
