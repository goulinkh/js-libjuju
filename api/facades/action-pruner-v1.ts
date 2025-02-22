/**
  Juju ActionPruner version 1.
  This facade is available on:
    Controller-machine-agent
    Machine-agent
    Unit-agent
    Models

  NOTE: This file was generated on Wed, 06 Oct 2021 18:15:31 GMT using
  the Juju schema from  Juju 3.0-beta1 at the git SHA 61c87ab7e1.
  Do not manually edit this file.
*/

import { autoBind } from "../utils.js";
import type { JujuRequest } from "../../generator/interfaces";


interface ActionPruneArgs {
  'max-history-mb': number;
  'max-history-time': number;
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ModelConfigResult {
  config: AdditionalProperties;
}

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  API provides access to the action pruner API.
*/
class ActionPrunerV1 {
  static NAME: string = 'ActionPruner';
  static VERSION: number = 1;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 1;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    ModelConfig returns the current model's configuration.
  */
  modelConfig(): Promise<ModelConfigResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ActionPruner',
        request: 'ModelConfig',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Prune endpoint removes action entries until
    only the ones newer than now - p.MaxHistoryTime remain and
    the history is smaller than p.MaxHistoryMB.
  */
  prune(params: ActionPruneArgs): Promise<undefined> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ActionPruner',
        request: 'Prune',
        version: 1,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchForModelConfigChanges returns a NotifyWatcher that observes
    changes to the model configuration.
    Note that although the NotifyWatchResult contains an Error field,
    it's not used because we are only returning a single watcher,
    so we use the regular error return.
  */
  watchForModelConfigChanges(): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'ActionPruner',
        request: 'WatchForModelConfigChanges',
        version: 1,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default ActionPrunerV1;
