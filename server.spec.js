const expect = require('chai').expect;
const querystring = require('querystring');
const http = require('http');
//const request = require('request');

//consider writing the test not to use request
//but to use a complete node http requests


describe("Public Tree API", function() {

  describe("Public Tree contains a message", function() {

    it("returns status 200", function(done) {

      var options = {
        hostname: 'localhost',
        port: 1337,
        path: '/1',
        method: 'GET',
        headers: {}
      };

      let getRequest = http.request(options, (response) => {
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
          responseBody = Buffer.concat(responseChunks).toString();

          console.log(responseBody);
          console.log(responseBody);


          expect(JSON.parse(responseBody)).to.be.equal(["2","3","4"]);
          expect(JSON.parse(responseBody)).to.deep.equal(["2","3","4"]);
          done();

        });

      });

      //Fires off the request
      getRequest.end()
    });

    it("returns the first letter of the message", function() {});

  });

  describe("Public Tree API can be used to hold a new message", function() {

    it("", function() {});

    it("", function() {});

  });

});
