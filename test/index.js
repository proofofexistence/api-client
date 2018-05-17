const assert = require('assert')

const utils = require('../lib/utils')

describe('Proof of Existence API Client', () => {

  it("should have tests", function(done){
    assert.equal(false, true)
  })

  describe('getDocStatus', function (done) {
    it('should return the status of the document', function(){
      assert.equal(
        utils.getDocStatus({ pending : true, txstamp: null }),
        'paymentRequired'
      )
      assert.equal(
        utils.getDocStatus({txstamp : "Some Time" , blockstamp: null}),
        'confirming'
      )
      assert.equal(
        utils.getDocStatus({txstamp : "Some Time" , blockstamp: "89898"}),
        'confirmed'
      )
    })
  })
})
