const execa = require('execa')
const profile = {}
class NpmProfile {
  static get ProfileProperties () {
    return ['two-factor auth', 'name', 'email', 'fullname', 'homepage', 'twitter', 'github', 'created', 'updated']
  }
  static async getProfileProperty (profileProperty) {
    const { stdout } = await execa('npm', ['profile', 'get', profileProperty])
    profile[profileProperty] = stdout

    return stdout
  }
  static async getTwoFactorAuth () {
    return this.getProfileProperty('two-factor auth')
  }
  static async profile () {
    const work = []
    this.ProfileProperties.forEach((profileProperty) => {
      work.push(this.getProfileProperty(profileProperty))
    })
    await Promise.all(work)
    return profile
  }
}
module.exports = NpmProfile
