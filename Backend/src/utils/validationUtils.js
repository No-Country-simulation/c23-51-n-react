const groupValidationErrors = (errors) => {
  errors.reduce((acc, error) => {
    acc[error.path] = acc[error.path] || []
    acc[error.path].push(error.msg)
    return acc
  }, {})
}

module.exports = {
  groupValidationErrors
}
