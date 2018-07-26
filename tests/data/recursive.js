/**
  Juju Recursive version 47.
  This API facade is available on model connections.

  NOTE: this file has been generated by the generate command in js-libjuju
  on Wed 2042/01/01 16:42:47 UTC. Do not manually edit this file.
*/

'use strict';


/**
  There is no documentation for this facade.
*/
class RecursiveV47 {

  constructor(transport, info) {
    this._transport = transport;
    this._info = info;
    this.version = 47;
  }

  /**
    There is no documentation for this method.

    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          self: <github.com/juju/juju#recursivestruct again>
        }
  */
  fullStatus(callback) {
    const params = {};
    // Prepare the request to the Juju API.
    const req = {
      type: 'Recursive',
      request: 'FullStatus',
      version: 47,
      params: params
    };
    // Send the request to the server.
    this._transport.write(req, (err, resp) => {
      if (!callback) {
        return;
      }
      if (err) {
        callback(err, {});
        return;
      }
      // Handle the response.
      let result;
      // github.com/juju/juju#RecursiveStruct
      if (resp) {
        result = {};
        // github.com/juju/juju#RecursiveStruct
        // TODO: handle recursive type referencing github.com/juju/juju#RecursiveStruct.
        result.self = resp['self'];
      }
      callback(null, result);
    });
  }
}


const wrappers = require('../wrappers.js');
if (wrappers.wrapRecursive) {
  // Decorate the facade class in order to improve user experience.
  RecursiveV47 = wrappers.wrapRecursive(RecursiveV47);
}

module.exports = RecursiveV47;
