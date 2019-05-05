/* eslint-disable no-undef */
'use strict'
const chai = require('chai')
const expect = chai.expect
const NpmProfile = require('../index.js')
describe('Profile', function () {
  describe('#profile()', function () {
    it('should return an object with all your npm profile attributes', async () => {
      let profile = await NpmProfile.profile()
      expect(profile).to.be.a('object')
      expect(profile).to.have.property('name')
      expect(profile).to.have.property('fullname')
      expect(profile).to.have.property('two-factor auth')
      expect(profile).to.have.property('email')
    })
  })
})
