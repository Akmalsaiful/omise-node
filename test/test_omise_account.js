var chai   = require('chai');
var expect = chai.expect;
var should = chai.should();

var config = require('./config.js');
var omise  = require('../index')(config);
var testHelper = require('./testHelper');

describe('Omise', function() {
  describe('#account', function() {
    it('should be able to retrieve an account', function(done) {
      testHelper.setupMock('account_retrieve');
      omise.account.retrieve(function(err, resp) {
        expect(resp.object, 'account');
        expect(resp.id, 'acct_123');
        expect(resp.email, 'test@omise.co');
        done();
      });
    });
  })
})
