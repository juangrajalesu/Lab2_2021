'use strict'

var expect = require("chai").expect;
var calculator = require("../app/calculator.js")

describe("Calculator - Test",function(){

    describe("Testing operations",function(){

        it("Testing the sum operation",function(){
            expect(calculator.add(1,1)).to.equal(1+1);
        });
        it("Testing the minus operation",function(){
            expect(calculator.minus(1,1)).to.equal(1-1);
        });
        it("Testing the multiply operation",function(){
            expect(calculator.multiply(2,3)).to.equal(2*3);
        });
        it("Testing the divide operation",function(){
            expect(calculator.divide(10,2)).to.equal(10/2);
        });
        it("Testing the divide operation by zero",function(){
            const expectError = new Error("No puedo dividir por cero");
            expect(calculator.divide(1,0).message).to.equal(expectError.message);
        });
    });
});