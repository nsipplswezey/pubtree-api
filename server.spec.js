'use strict'
const expect = require('chai').expect;
const querystring = require('querystring');
const http = require('http');

describe("Public Tree API", function() {

  describe("Public Tree contains a message", function() {

    it("returns the ids of the child node", function(done) {

      const options = {
        hostname: 'localhost',
        port: 1337,
        path: '/0',
        method: 'GET',
        headers: {}
      };

      const getRequest = http.request(options, (response) => {
        console.log(`STATUS: ${response.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(response.headers)}`);

        let responseChunks = [];

        //response body data comes in chunks
        response.on('data', (chunk) => {
          console.log(`BODY: ${chunk}`);

          responseChunks.push(chunk);

        });

        response.on('end', () => {
          console.log('No more data in response.');
          console.log(responseChunks);
          const responseBodyString = Buffer.concat(responseChunks).toString();
          const responseData = JSON.parse(responseBodyString);

          //One of these will fail; why?
          expect(JSON.parse(responseData)).to.be.equal(["1","2","3"]);
          expect(JSON.parse(responseData)).to.deep.equal(["1","2","3"]);
          done();

        });

      });

      //Invokes the callback that was passed the invokation of http.request
      getRequest.end()
    });

    it("responds to an http request with the first letter of the message", function() {

      http.get()


    });

  });

  describe("Public Tree API can be used to hold a new message", function() {

    it("", function() {});

    it("", function() {});

  });

});
