const groupValidationErrors = (errors) => {
  return errors.reduce((acc, error) => {
    acc[error.path] = acc[error.path] || []
    acc[error.path].push(error.msg)
    return acc
  }, {})
}

module.exports = {
  groupValidationErrors
}
