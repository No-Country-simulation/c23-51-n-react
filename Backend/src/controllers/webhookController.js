class webhookController {
  constructor (userModel) {
    this.userModel = userModel
  }

  async handleWebHook (req, res) {
    console.log(await req.body)

    res.send('correcto')
  }
}

module.exports = webhookController
