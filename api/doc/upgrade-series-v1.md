<!---
NOTE: this file has been generated by the doc command in js-libjuju
on Tue 2018/11/27 16:23:14 UTC. Do not manually edit this file.
--->
# UpgradeSeries v1

API serves methods required by the machine agent upgrade-series worker.
This API facade is available on model connections.

To include UpgradeSeriesV1 capabilities in your client, load it as
part of your facades, for instance:
```javascript
const {conn, logout} = await jujulib.connectAndLogin(url, credentials, {
  facades: [require('jujulib/api/facades/upgrade-series-v1')]
});
```
Facade methods at then accessible at `conn.facades.upgradeSeries`.

Go back to [index](index.md).

## Methods
- [finishUpgradeSeries](#finishUpgradeSeriesargs-callback)
- [machineStatus](#machineStatusargs-callback)
- [pinMachineApplications](#pinMachineApplicationscallback)
- [pinnedLeadership](#pinnedLeadershipcallback)
- [setMachineStatus](#setMachineStatusargs-callback)
- [setUpgradeSeriesUnitStatus](#setUpgradeSeriesUnitStatusargs-callback)
- [startUnitCompletion](#startUnitCompletionargs-callback)
- [targetSeries](#targetSeriesargs-callback)
- [unitsCompleted](#unitsCompletedargs-callback)
- [unitsPrepared](#unitsPreparedargs-callback)
- [unpinMachineApplications](#unpinMachineApplicationscallback)
- [upgradeSeriesUnitStatus](#upgradeSeriesUnitStatusargs-callback)
- [watchUpgradeSeriesNotifications](#watchUpgradeSeriesNotificationsargs-callback)

## finishUpgradeSeries(args, callback)
FinishUpgradeSeries is the last action in the upgrade workflow and is
    called after all machine and unit statuses are "completed". It updates
    the machine series to reflect the completed upgrade, then removes the
    upgrade-series lock.

- *@param {Object} args* Arguments to be provided to Juju, as an object like
  the following:
```javascript
{
  args: []{
    tag: {
      tag: string
    },
    force: bool,
    series: string
  }
}
```
- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
{
  results: []{
    error: {
      message: string,
      code: string,
      info: {
        macaroon: anything,
        macaroonPath: string
      }
    }
  }
}
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## machineStatus(args, callback)
MachineStatus gets the current upgrade-series status of a machine.

- *@param {Object} args* Arguments to be provided to Juju, as an object like
  the following:
```javascript
{
  entities: []{
    tag: string
  }
}
```
- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
{
  results: []{
    error: {
      message: string,
      code: string,
      info: {
        macaroon: anything,
        macaroonPath: string
      }
    },
    status: string
  }
}
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## pinMachineApplications(callback)
There is no documentation for this method.

- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
{
  results: []{
    applicationName: string,
    error: {
      message: string,
      code: string,
      info: {
        macaroon: anything,
        macaroonPath: string
      }
    }
  }
}
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## pinnedLeadership(callback)
There is no documentation for this method.

- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
{
  result: map[string][]string
}
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## setMachineStatus(args, callback)
SetMachineStatus sets the current upgrade-series status of a machine.

- *@param {Object} args* Arguments to be provided to Juju, as an object like
  the following:
```javascript
{
  params: []{
    entity: {
      tag: string
    },
    status: string,
    message: string
  }
}
```
- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
{
  results: []{
    error: {
      message: string,
      code: string,
      info: {
        macaroon: anything,
        macaroonPath: string
      }
    }
  }
}
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## setUpgradeSeriesUnitStatus(args, callback)
SetUpgradeSeriesUnitStatus sets the upgrade series status of the unit. If
    no upgrade is in progress an error is returned instead.

- *@param {Object} args* Arguments to be provided to Juju, as an object like
  the following:
```javascript
{
  params: []{
    entity: {
      tag: string
    },
    status: string,
    message: string
  }
}
```
- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
{
  results: []{
    error: {
      message: string,
      code: string,
      info: {
        macaroon: anything,
        macaroonPath: string
      }
    }
  }
}
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## startUnitCompletion(args, callback)
StartUnitCompletion starts the upgrade series completion phase for all
    subordinate units of a given machine.

- *@param {Object} args* Arguments to be provided to Juju, as an object like
  the following:
```javascript
{
  entities: []{
    tag: string
  },
  message: string
}
```
- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
{
  results: []{
    error: {
      message: string,
      code: string,
      info: {
        macaroon: anything,
        macaroonPath: string
      }
    }
  }
}
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## targetSeries(args, callback)
TargetSeries returns the series that a machine has been locked for
    upgrading to.

- *@param {Object} args* Arguments to be provided to Juju, as an object like
  the following:
```javascript
{
  entities: []{
    tag: string
  }
}
```
- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
{
  results: []{
    error: {
      message: string,
      code: string,
      info: {
        macaroon: anything,
        macaroonPath: string
      }
    },
    result: string
  }
}
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## unitsCompleted(args, callback)
UnitsCompleted returns the units running on this machine that have
    completed the upgrade-series workflow and are in their normal running
    state.

- *@param {Object} args* Arguments to be provided to Juju, as an object like
  the following:
```javascript
{
  entities: []{
    tag: string
  }
}
```
- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
{
  results: []{
    entities: []{
      tag: string
    },
    error: {
      message: string,
      code: string,
      info: {
        macaroon: anything,
        macaroonPath: string
      }
    }
  }
}
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## unitsPrepared(args, callback)
UnitsPrepared returns the units running on this machine that have completed
    their upgrade-series preparation, and are ready to be stopped and have
    their unit agent services converted for the target series.

- *@param {Object} args* Arguments to be provided to Juju, as an object like
  the following:
```javascript
{
  entities: []{
    tag: string
  }
}
```
- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
{
  results: []{
    entities: []{
      tag: string
    },
    error: {
      message: string,
      code: string,
      info: {
        macaroon: anything,
        macaroonPath: string
      }
    }
  }
}
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## unpinMachineApplications(callback)
There is no documentation for this method.

- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
{
  results: []{
    applicationName: string,
    error: {
      message: string,
      code: string,
      info: {
        macaroon: anything,
        macaroonPath: string
      }
    }
  }
}
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## upgradeSeriesUnitStatus(args, callback)
UpgradeSeriesUnitStatus returns the current preparation status of an
    upgrading unit. If no series upgrade is in progress an error is
    returned instead.

- *@param {Object} args* Arguments to be provided to Juju, as an object like
  the following:
```javascript
{
  entities: []{
    tag: string
  }
}
```
- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
{
  results: []{
    error: {
      message: string,
      code: string,
      info: {
        macaroon: anything,
        macaroonPath: string
      }
    },
    status: string
  }
}
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.

## watchUpgradeSeriesNotifications(args, callback)
WatchUpgradeSeriesNotifications returns a NotifyWatcher for observing
    changes to upgrade series locks.

- *@param {Object} args* Arguments to be provided to Juju, as an object like
  the following:
```javascript
{
  entities: []{
    tag: string
  }
}
```
- *@param {Function} callback* Called when the response from Juju is available,
  the callback receives an error and the result. If there are no errors, the
  result is provided as an object like the following:
```javascript
{
  results: []{
    notifywatcherid: string,
    error: {
      message: string,
      code: string,
      info: {
        macaroon: anything,
        macaroonPath: string
      }
    }
  }
}
```
- *@returns {Promise}* Rejected or resolved with the values normally passed to
  the callback when the callback is not provided.
  This allows this method to be awaited.