
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./lib/react-validation-code.min.js');
} else {
    module.exports = require('./lib/react-validation-code.js');
}