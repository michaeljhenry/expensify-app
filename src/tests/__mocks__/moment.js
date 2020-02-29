const moment = require.requireActual('moment');

export default (timestamp = 0) => { // start at a particular point in time if no point in time was provided
    return moment(timestamp)
};

