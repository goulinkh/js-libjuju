/**
  Juju Resources version 1.
  This API facade is available on model connections.

  NOTE: this file has been generated by the generate command in js-libjuju
  on Tue 2018/11/27 16:23:14 UTC. Do not manually edit this file.
*/

'use strict';

const {autoBind, createAsyncHandler} = require('../transform.js');

/**
  Facade is the public API facade for resources.
*/
class ResourcesV1 {

  constructor(transport, info) {
    this._transport = transport;
    this._info = info;
    this.version = 1;

    // Automatically bind all methods to instances.
    autoBind(this);
  }

  /**
    AddPendingResources adds the provided resources (info) to the Juju model in
    a pending state, meaning they are not available until resolved.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          entity: {
            tag: string
          },
          addcharmwithauthorization: {
            url: string,
            channel: string,
            macaroon: anything,
            force: bool
          },
          resources: []{
            name: string,
            type: string,
            path: string,
            description: string,
            origin: string,
            revision: int,
            fingerprint: []int,
            size: int
          }
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          errorresult: {
            error: {
              message: string,
              code: string,
              info: {
                macaroon: anything,
                macaroonPath: string
              }
            }
          },
          pendingIds: []string
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  addPendingResources(args, callback) {
    return new Promise((resolve, reject) => {
      // Prepare request parameters.
      let params;
      // github.com/juju/juju/apiserver/params#AddPendingResourcesArgs
      if (args) {
        params = {};
        // github.com/juju/juju/apiserver/params#Entity
        if (args.entity) {
          params['Entity'] = {};
          params['Entity']['tag'] = args.entity.tag;
        }
        // github.com/juju/juju/apiserver/params#AddCharmWithAuthorization
        if (args.addcharmwithauthorization) {
          params['AddCharmWithAuthorization'] = {};
          params['AddCharmWithAuthorization']['url'] = args.addcharmwithauthorization.url;
          params['AddCharmWithAuthorization']['channel'] = args.addcharmwithauthorization.channel;
          // gopkg.in/macaroon.v2-unstable#Macaroon
          params['AddCharmWithAuthorization']['macaroon'] = args.addcharmwithauthorization.macaroon;
          params['AddCharmWithAuthorization']['force'] = args.addcharmwithauthorization.force;
        }
        params['resources'] = [];
        args.resources = args.resources || [];
        for (let i = 0; i < args.resources.length; i++) {
          // github.com/juju/juju/apiserver/params#CharmResource
          if (args.resources[i]) {
            params['resources'][i] = {};
            params['resources'][i]['name'] = args.resources[i].name;
            params['resources'][i]['type'] = args.resources[i].type;
            params['resources'][i]['path'] = args.resources[i].path;
            params['resources'][i]['description'] = args.resources[i].description;
            params['resources'][i]['origin'] = args.resources[i].origin;
            params['resources'][i]['revision'] = args.resources[i].revision;
            params['resources'][i]['fingerprint'] = [];
            args.resources[i].fingerprint = args.resources[i].fingerprint || [];
            for (let i2 = 0; i2 < args.resources[i].fingerprint.length; i2++) {
              params['resources'][i]['fingerprint'][i2] = args.resources[i].fingerprint[i2];
            }
            params['resources'][i]['size'] = args.resources[i].size;
          }
        }
      }
      // Prepare the request to the Juju API.
      const req = {
        type: 'Resources',
        request: 'AddPendingResources',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#AddPendingResourcesResult
        if (resp) {
          result = {};
          // github.com/juju/juju/apiserver/params#ErrorResult
          if (resp['ErrorResult']) {
            result.errorresult = {};
            // github.com/juju/juju/apiserver/params#Error
            if (resp['ErrorResult']['error']) {
              result.errorresult.error = {};
              result.errorresult.error.message = resp['ErrorResult']['error']['message'];
              result.errorresult.error.code = resp['ErrorResult']['error']['code'];
              // github.com/juju/juju/apiserver/params#ErrorInfo
              if (resp['ErrorResult']['error']['info']) {
                result.errorresult.error.info = {};
                // gopkg.in/macaroon.v2-unstable#Macaroon
                result.errorresult.error.info.macaroon = resp['ErrorResult']['error']['info']['macaroon'];
                result.errorresult.error.info.macaroonPath = resp['ErrorResult']['error']['info']['macaroon-path'];
              }
            }
          }
          result.pendingIds = [];
          resp['pending-ids'] = resp['pending-ids'] || [];
          for (let i = 0; i < resp['pending-ids'].length; i++) {
            result.pendingIds[i] = resp['pending-ids'][i];
          }
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }

  /**
    ListResources returns the list of resources for the given application.

    @param {Object} args Arguments to be provided to Juju, as an object like
      the following:
        {
          entities: []{
            tag: string
          }
        }
    @param {Function} callback Called when the response from Juju is available,
      the callback receives an error and the result. If there are no errors,
      the result is provided as an object like the following:
        {
          results: []{
            errorresult: {
              error: {
                message: string,
                code: string,
                info: {
                  macaroon: anything,
                  macaroonPath: string
                }
              }
            },
            resources: []{
              charmresource: {
                name: string,
                type: string,
                path: string,
                description: string,
                origin: string,
                revision: int,
                fingerprint: []int,
                size: int
              },
              id: string,
              pendingId: string,
              application: string,
              username: string,
              timestamp: time
            },
            charmStoreResources: []{
              name: string,
              type: string,
              path: string,
              description: string,
              origin: string,
              revision: int,
              fingerprint: []int,
              size: int
            },
            unitResources: []{
              entity: {
                tag: string
              },
              resources: []{
                charmresource: {
                  name: string,
                  type: string,
                  path: string,
                  description: string,
                  origin: string,
                  revision: int,
                  fingerprint: []int,
                  size: int
                },
                id: string,
                pendingId: string,
                application: string,
                username: string,
                timestamp: time
              },
              downloadProgress: map[string]int
            }
          }
        }
    @return {Promise} Rejected or resolved with the values normally passed to
      the callback when the callback is not provided.
      This allows this method to be awaited.
  */
  listResources(args, callback) {
    return new Promise((resolve, reject) => {
      // Prepare request parameters.
      let params;
      // github.com/juju/juju/apiserver/params#ListResourcesArgs
      if (args) {
        params = {};
        params['entities'] = [];
        args.entities = args.entities || [];
        for (let i = 0; i < args.entities.length; i++) {
          // github.com/juju/juju/apiserver/params#Entity
          if (args.entities[i]) {
            params['entities'][i] = {};
            params['entities'][i]['tag'] = args.entities[i].tag;
          }
        }
      }
      // Prepare the request to the Juju API.
      const req = {
        type: 'Resources',
        request: 'ListResources',
        version: 1,
        params: params
      };
      // Define a transform method if necessary.
      let transform = null;
      transform = resp => {
        let result;
        // github.com/juju/juju/apiserver/params#ResourcesResults
        if (resp) {
          result = {};
          result.results = [];
          resp['results'] = resp['results'] || [];
          for (let i = 0; i < resp['results'].length; i++) {
            // github.com/juju/juju/apiserver/params#ResourcesResult
            if (resp['results'][i]) {
              result.results[i] = {};
              // github.com/juju/juju/apiserver/params#ErrorResult
              if (resp['results'][i]['ErrorResult']) {
                result.results[i].errorresult = {};
                // github.com/juju/juju/apiserver/params#Error
                if (resp['results'][i]['ErrorResult']['error']) {
                  result.results[i].errorresult.error = {};
                  result.results[i].errorresult.error.message = resp['results'][i]['ErrorResult']['error']['message'];
                  result.results[i].errorresult.error.code = resp['results'][i]['ErrorResult']['error']['code'];
                  // github.com/juju/juju/apiserver/params#ErrorInfo
                  if (resp['results'][i]['ErrorResult']['error']['info']) {
                    result.results[i].errorresult.error.info = {};
                    // gopkg.in/macaroon.v2-unstable#Macaroon
                    result.results[i].errorresult.error.info.macaroon = resp['results'][i]['ErrorResult']['error']['info']['macaroon'];
                    result.results[i].errorresult.error.info.macaroonPath = resp['results'][i]['ErrorResult']['error']['info']['macaroon-path'];
                  }
                }
              }
              result.results[i].resources = [];
              resp['results'][i]['resources'] = resp['results'][i]['resources'] || [];
              for (let i2 = 0; i2 < resp['results'][i]['resources'].length; i2++) {
                // github.com/juju/juju/apiserver/params#Resource
                if (resp['results'][i]['resources'][i2]) {
                  result.results[i].resources[i2] = {};
                  // github.com/juju/juju/apiserver/params#CharmResource
                  if (resp['results'][i]['resources'][i2]['CharmResource']) {
                    result.results[i].resources[i2].charmresource = {};
                    result.results[i].resources[i2].charmresource.name = resp['results'][i]['resources'][i2]['CharmResource']['name'];
                    result.results[i].resources[i2].charmresource.type = resp['results'][i]['resources'][i2]['CharmResource']['type'];
                    result.results[i].resources[i2].charmresource.path = resp['results'][i]['resources'][i2]['CharmResource']['path'];
                    result.results[i].resources[i2].charmresource.description = resp['results'][i]['resources'][i2]['CharmResource']['description'];
                    result.results[i].resources[i2].charmresource.origin = resp['results'][i]['resources'][i2]['CharmResource']['origin'];
                    result.results[i].resources[i2].charmresource.revision = resp['results'][i]['resources'][i2]['CharmResource']['revision'];
                    result.results[i].resources[i2].charmresource.fingerprint = [];
                    resp['results'][i]['resources'][i2]['CharmResource']['fingerprint'] = resp['results'][i]['resources'][i2]['CharmResource']['fingerprint'] || [];
                    for (let i3 = 0; i3 < resp['results'][i]['resources'][i2]['CharmResource']['fingerprint'].length; i3++) {
                      result.results[i].resources[i2].charmresource.fingerprint[i3] = resp['results'][i]['resources'][i2]['CharmResource']['fingerprint'][i3];
                    }
                    result.results[i].resources[i2].charmresource.size = resp['results'][i]['resources'][i2]['CharmResource']['size'];
                  }
                  result.results[i].resources[i2].id = resp['results'][i]['resources'][i2]['id'];
                  result.results[i].resources[i2].pendingId = resp['results'][i]['resources'][i2]['pending-id'];
                  result.results[i].resources[i2].application = resp['results'][i]['resources'][i2]['application'];
                  result.results[i].resources[i2].username = resp['results'][i]['resources'][i2]['username'];
                  // time#Time
                  result.results[i].resources[i2].timestamp = resp['results'][i]['resources'][i2]['timestamp'];
                }
              }
              result.results[i].charmStoreResources = [];
              resp['results'][i]['charm-store-resources'] = resp['results'][i]['charm-store-resources'] || [];
              for (let i2 = 0; i2 < resp['results'][i]['charm-store-resources'].length; i2++) {
                // github.com/juju/juju/apiserver/params#CharmResource
                if (resp['results'][i]['charm-store-resources'][i2]) {
                  result.results[i].charmStoreResources[i2] = {};
                  result.results[i].charmStoreResources[i2].name = resp['results'][i]['charm-store-resources'][i2]['name'];
                  result.results[i].charmStoreResources[i2].type = resp['results'][i]['charm-store-resources'][i2]['type'];
                  result.results[i].charmStoreResources[i2].path = resp['results'][i]['charm-store-resources'][i2]['path'];
                  result.results[i].charmStoreResources[i2].description = resp['results'][i]['charm-store-resources'][i2]['description'];
                  result.results[i].charmStoreResources[i2].origin = resp['results'][i]['charm-store-resources'][i2]['origin'];
                  result.results[i].charmStoreResources[i2].revision = resp['results'][i]['charm-store-resources'][i2]['revision'];
                  result.results[i].charmStoreResources[i2].fingerprint = [];
                  resp['results'][i]['charm-store-resources'][i2]['fingerprint'] = resp['results'][i]['charm-store-resources'][i2]['fingerprint'] || [];
                  for (let i3 = 0; i3 < resp['results'][i]['charm-store-resources'][i2]['fingerprint'].length; i3++) {
                    result.results[i].charmStoreResources[i2].fingerprint[i3] = resp['results'][i]['charm-store-resources'][i2]['fingerprint'][i3];
                  }
                  result.results[i].charmStoreResources[i2].size = resp['results'][i]['charm-store-resources'][i2]['size'];
                }
              }
              result.results[i].unitResources = [];
              resp['results'][i]['unit-resources'] = resp['results'][i]['unit-resources'] || [];
              for (let i2 = 0; i2 < resp['results'][i]['unit-resources'].length; i2++) {
                // github.com/juju/juju/apiserver/params#UnitResources
                if (resp['results'][i]['unit-resources'][i2]) {
                  result.results[i].unitResources[i2] = {};
                  // github.com/juju/juju/apiserver/params#Entity
                  if (resp['results'][i]['unit-resources'][i2]['Entity']) {
                    result.results[i].unitResources[i2].entity = {};
                    result.results[i].unitResources[i2].entity.tag = resp['results'][i]['unit-resources'][i2]['Entity']['tag'];
                  }
                  result.results[i].unitResources[i2].resources = [];
                  resp['results'][i]['unit-resources'][i2]['resources'] = resp['results'][i]['unit-resources'][i2]['resources'] || [];
                  for (let i3 = 0; i3 < resp['results'][i]['unit-resources'][i2]['resources'].length; i3++) {
                    // github.com/juju/juju/apiserver/params#Resource
                    if (resp['results'][i]['unit-resources'][i2]['resources'][i3]) {
                      result.results[i].unitResources[i2].resources[i3] = {};
                      // github.com/juju/juju/apiserver/params#CharmResource
                      if (resp['results'][i]['unit-resources'][i2]['resources'][i3]['CharmResource']) {
                        result.results[i].unitResources[i2].resources[i3].charmresource = {};
                        result.results[i].unitResources[i2].resources[i3].charmresource.name = resp['results'][i]['unit-resources'][i2]['resources'][i3]['CharmResource']['name'];
                        result.results[i].unitResources[i2].resources[i3].charmresource.type = resp['results'][i]['unit-resources'][i2]['resources'][i3]['CharmResource']['type'];
                        result.results[i].unitResources[i2].resources[i3].charmresource.path = resp['results'][i]['unit-resources'][i2]['resources'][i3]['CharmResource']['path'];
                        result.results[i].unitResources[i2].resources[i3].charmresource.description = resp['results'][i]['unit-resources'][i2]['resources'][i3]['CharmResource']['description'];
                        result.results[i].unitResources[i2].resources[i3].charmresource.origin = resp['results'][i]['unit-resources'][i2]['resources'][i3]['CharmResource']['origin'];
                        result.results[i].unitResources[i2].resources[i3].charmresource.revision = resp['results'][i]['unit-resources'][i2]['resources'][i3]['CharmResource']['revision'];
                        result.results[i].unitResources[i2].resources[i3].charmresource.fingerprint = [];
                        resp['results'][i]['unit-resources'][i2]['resources'][i3]['CharmResource']['fingerprint'] = resp['results'][i]['unit-resources'][i2]['resources'][i3]['CharmResource']['fingerprint'] || [];
                        for (let i4 = 0; i4 < resp['results'][i]['unit-resources'][i2]['resources'][i3]['CharmResource']['fingerprint'].length; i4++) {
                          result.results[i].unitResources[i2].resources[i3].charmresource.fingerprint[i4] = resp['results'][i]['unit-resources'][i2]['resources'][i3]['CharmResource']['fingerprint'][i4];
                        }
                        result.results[i].unitResources[i2].resources[i3].charmresource.size = resp['results'][i]['unit-resources'][i2]['resources'][i3]['CharmResource']['size'];
                      }
                      result.results[i].unitResources[i2].resources[i3].id = resp['results'][i]['unit-resources'][i2]['resources'][i3]['id'];
                      result.results[i].unitResources[i2].resources[i3].pendingId = resp['results'][i]['unit-resources'][i2]['resources'][i3]['pending-id'];
                      result.results[i].unitResources[i2].resources[i3].application = resp['results'][i]['unit-resources'][i2]['resources'][i3]['application'];
                      result.results[i].unitResources[i2].resources[i3].username = resp['results'][i]['unit-resources'][i2]['resources'][i3]['username'];
                      // time#Time
                      result.results[i].unitResources[i2].resources[i3].timestamp = resp['results'][i]['unit-resources'][i2]['resources'][i3]['timestamp'];
                    }
                  }
                  result.results[i].unitResources[i2].downloadProgress = {};
                  resp['results'][i]['unit-resources'][i2]['download-progress'] = resp['results'][i]['unit-resources'][i2]['download-progress'] || {};
                  for (let k in resp['results'][i]['unit-resources'][i2]['download-progress']) {
                    result.results[i].unitResources[i2].downloadProgress[k] = resp['results'][i]['unit-resources'][i2]['download-progress'][k];
                  }
                }
              }
            }
          }
        }
        return result;
      };

      const handler = createAsyncHandler(callback, resolve, reject, transform);
      // Send the request to the server.
      this._transport.write(req, handler);
    });
  }
}


const wrappers = require('../wrappers.js');
if (wrappers.wrapResources) {
  // Decorate the facade class in order to improve user experience.
  ResourcesV1 = wrappers.wrapResources(ResourcesV1);
}

module.exports = ResourcesV1;