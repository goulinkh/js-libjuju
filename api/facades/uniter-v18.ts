/**
  Juju Uniter version 18.
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


interface APIHostPortsResult {
  servers: HostPort[][];
}

interface Action {
  'execution-group'?: string;
  name: string;
  parallel?: boolean;
  parameters?: AdditionalProperties;
  receiver: string;
  tag: string;
}

interface ActionExecutionResult {
  'action-tag': string;
  message?: string;
  results?: AdditionalProperties;
  status: string;
}

interface ActionExecutionResults {
  results: ActionExecutionResult[];
}

interface ActionMessage {
  message: string;
  timestamp: string;
}

interface ActionMessageParams {
  messages: EntityString[];
}

interface ActionResult {
  action: Action;
  completed: string;
  enqueued: string;
  error: Error;
  log: ActionMessage[];
  message: string;
  output: AdditionalProperties;
  started: string;
  status: string;
}

interface ActionResults {
  results: ActionResult[];
}

interface Address {
  cidr?: string;
  'config-type'?: string;
  'is-secondary'?: boolean;
  scope: string;
  'space-id'?: string;
  'space-name'?: string;
  type: string;
  value: string;
}

interface ApplicationStatusResult {
  application: StatusResult;
  error?: Error;
  units: AdditionalProperties;
}

interface ApplicationStatusResults {
  results: ApplicationStatusResult[];
}

interface BoolResult {
  error?: Error;
  result: boolean;
}

interface BoolResults {
  results: BoolResult[];
}

interface CharmRelation {
  interface: string;
  limit: number;
  name: string;
  optional: boolean;
  role: string;
  scope: string;
}

interface CharmURL {
  url: string;
}

interface CharmURLs {
  urls: CharmURL[];
}

interface CloudCredential {
  attrs?: AdditionalProperties;
  'auth-type': string;
  redacted?: string[];
}

interface CloudSpec {
  cacertificates?: string[];
  credential?: CloudCredential;
  endpoint?: string;
  'identity-endpoint'?: string;
  'is-controller-cloud'?: boolean;
  name: string;
  region?: string;
  'skip-tls-verify'?: boolean;
  'storage-endpoint'?: string;
  type: string;
}

interface CloudSpecResult {
  error: Error;
  result: CloudSpec;
}

interface CommitHookChangesArg {
  'add-storage'?: StorageAddParams[];
  'close-ports'?: EntityPortRange[];
  'open-ports'?: EntityPortRange[];
  'pod-spec'?: PodSpec;
  'relation-unit-settings'?: RelationUnitSettings[];
  'set-raw-k8s-spec'?: PodSpec;
  tag: string;
  'unit-state'?: SetUnitStateArg;
  'update-network-info': boolean;
}

interface CommitHookChangesArgs {
  args: CommitHookChangesArg[];
}

interface ConfigSettingsResult {
  error?: Error;
  settings: AdditionalProperties;
}

interface ConfigSettingsResults {
  results: ConfigSettingsResult[];
}

interface Endpoint {
  'application-name': string;
  relation: CharmRelation;
}

interface Entities {
  entities: Entity[];
}

interface EntitiesCharmURL {
  entities: EntityCharmURL[];
}

interface EntitiesPortRanges {
  entities: EntityPortRange[];
}

interface Entity {
  tag: string;
}

interface EntityCharmURL {
  'charm-url': string;
  tag: string;
}

interface EntityPortRange {
  endpoint: string;
  'from-port': number;
  protocol: string;
  tag: string;
  'to-port': number;
}

interface EntityStatusArgs {
  data: AdditionalProperties;
  info: string;
  status: string;
  tag: string;
}

interface EntityString {
  tag: string;
  value: string;
}

interface EntityWorkloadVersion {
  tag: string;
  'workload-version': string;
}

interface EntityWorkloadVersions {
  entities: EntityWorkloadVersion[];
}

interface Error {
  code: string;
  info?: AdditionalProperties;
  message: string;
}

interface ErrorResult {
  error: Error;
}

interface ErrorResults {
  results: ErrorResult[];
}

interface GetLeadershipSettingsBulkResults {
  results: GetLeadershipSettingsResult[];
}

interface GetLeadershipSettingsResult {
  error?: Error;
  settings: AdditionalProperties;
}

interface GoalState {
  relations: AdditionalProperties;
  units: AdditionalProperties;
}

interface GoalStateResult {
  error: Error;
  result: GoalState;
}

interface GoalStateResults {
  results: GoalStateResult[];
}

interface GoalStateStatus {
  since: string;
  status: string;
}

interface HostPort {
  Address: Address;
  cidr?: string;
  'config-type'?: string;
  'is-secondary'?: boolean;
  port: number;
  scope: string;
  'space-id'?: string;
  'space-name'?: string;
  type: string;
  value: string;
}

interface IntResult {
  error?: Error;
  result: number;
}

interface IntResults {
  results: IntResult[];
}

interface InterfaceAddress {
  cidr: string;
  hostname: string;
  value: string;
}

interface LifeResult {
  error?: Error;
  life: string;
}

interface LifeResults {
  results: LifeResult[];
}

interface MergeLeadershipSettingsBulkParams {
  params: MergeLeadershipSettingsParam[];
}

interface MergeLeadershipSettingsParam {
  'application-tag'?: string;
  settings: AdditionalProperties;
  'unit-tag'?: string;
}

interface MeterStatusResult {
  code: string;
  error?: Error;
  info: string;
}

interface MeterStatusResults {
  results: MeterStatusResult[];
}

interface Metric {
  key: string;
  labels?: AdditionalProperties;
  time: string;
  value: string;
}

interface MetricBatch {
  'charm-url': string;
  created: string;
  metrics: Metric[];
  uuid: string;
}

interface MetricBatchParam {
  batch: MetricBatch;
  tag: string;
}

interface MetricBatchParams {
  batches: MetricBatchParam[];
}

interface ModelConfigResult {
  config: AdditionalProperties;
}

interface ModelResult {
  error?: Error;
  name: string;
  type: string;
  uuid: string;
}

interface NetworkInfo {
  addresses: InterfaceAddress[];
  'interface-name': string;
  'mac-address': string;
}

interface NetworkInfoParams {
  bindings: string[];
  'relation-id'?: number;
  unit: string;
}

interface NetworkInfoResult {
  'bind-addresses': NetworkInfo[];
  'egress-subnets': string[];
  error: Error;
  'ingress-addresses': string[];
}

interface NetworkInfoResults {
  results: AdditionalProperties;
}

interface NotifyWatchResult {
  NotifyWatcherId: string;
  error?: Error;
}

interface NotifyWatchResults {
  results: NotifyWatchResult[];
}

interface OpenMachinePortRangesByEndpointResult {
  error?: Error;
  'unit-port-ranges': AdditionalProperties;
}

interface OpenMachinePortRangesByEndpointResults {
  results: OpenMachinePortRangesByEndpointResult[];
}

interface OpenUnitPortRangesByEndpoint {
  endpoint: string;
  'port-ranges': PortRange[];
}

interface PodSpec {
  spec?: string;
  tag: string;
}

interface PortRange {
  'from-port': number;
  protocol: string;
  'to-port': number;
}

interface RelationIds {
  'relation-ids': number[];
}

interface RelationResult {
  bool?: boolean;
  endpoint: Endpoint;
  error?: Error;
  id: number;
  key: string;
  life: string;
  'other-application'?: string;
}

interface RelationResults {
  results: RelationResult[];
}

interface RelationStatusArg {
  message: string;
  'relation-id': number;
  status: string;
  'unit-tag': string;
}

interface RelationStatusArgs {
  args: RelationStatusArg[];
}

interface RelationUnit {
  relation: string;
  unit: string;
}

interface RelationUnitPair {
  'local-unit': string;
  relation: string;
  'remote-unit': string;
}

interface RelationUnitPairs {
  'relation-unit-pairs': RelationUnitPair[];
}

interface RelationUnitSettings {
  'application-settings': AdditionalProperties;
  relation: string;
  settings: AdditionalProperties;
  unit: string;
}

interface RelationUnitStatus {
  'in-scope': boolean;
  'relation-tag': string;
  suspended: boolean;
}

interface RelationUnitStatusResult {
  error?: Error;
  results: RelationUnitStatus[];
}

interface RelationUnitStatusResults {
  results: RelationUnitStatusResult[];
}

interface RelationUnits {
  'relation-units': RelationUnit[];
}

interface RelationUnitsChange {
  'app-changed'?: AdditionalProperties;
  changed: AdditionalProperties;
  departed?: string[];
}

interface RelationUnitsSettings {
  'relation-units': RelationUnitSettings[];
}

interface RelationUnitsWatchResult {
  changes: RelationUnitsChange;
  error?: Error;
  'watcher-id': string;
}

interface RelationUnitsWatchResults {
  results: RelationUnitsWatchResult[];
}

interface ResolvedModeResult {
  error?: Error;
  mode: string;
}

interface ResolvedModeResults {
  results: ResolvedModeResult[];
}

interface SetStatus {
  entities: EntityStatusArgs[];
}

interface SetUnitStateArg {
  'charm-state'?: AdditionalProperties;
  'meter-status-state'?: string;
  'relation-state'?: AdditionalProperties;
  'storage-state'?: string;
  tag: string;
  'uniter-state'?: string;
}

interface SetUnitStateArgs {
  args: SetUnitStateArg[];
}

interface SettingsResult {
  error?: Error;
  settings: AdditionalProperties;
}

interface SettingsResults {
  results: SettingsResult[];
}

interface StatusResult {
  data: AdditionalProperties;
  error?: Error;
  id: string;
  info: string;
  life: string;
  since: string;
  status: string;
}

interface StatusResults {
  results: StatusResult[];
}

interface StorageAddParams {
  name: string;
  storage: StorageConstraints;
  unit: string;
}

interface StorageAttachment {
  kind: number;
  life: string;
  location: string;
  'owner-tag': string;
  'storage-tag': string;
  'unit-tag': string;
}

interface StorageAttachmentId {
  'storage-tag': string;
  'unit-tag': string;
}

interface StorageAttachmentIds {
  ids: StorageAttachmentId[];
}

interface StorageAttachmentIdsResult {
  error?: Error;
  result: StorageAttachmentIds;
}

interface StorageAttachmentIdsResults {
  results: StorageAttachmentIdsResult[];
}

interface StorageAttachmentResult {
  error?: Error;
  result: StorageAttachment;
}

interface StorageAttachmentResults {
  results: StorageAttachmentResult[];
}

interface StorageConstraints {
  count: number;
  pool: string;
  size: number;
}

interface StoragesAddParams {
  storages: StorageAddParams[];
}

interface StringBoolResult {
  error?: Error;
  ok: boolean;
  result: string;
}

interface StringBoolResults {
  results: StringBoolResult[];
}

interface StringResult {
  error?: Error;
  result: string;
}

interface StringResults {
  results: StringResult[];
}

interface StringsResult {
  error: Error;
  result: string[];
}

interface StringsWatchResult {
  changes?: string[];
  error?: Error;
  'watcher-id': string;
}

interface StringsWatchResults {
  results: StringsWatchResult[];
}

interface UnitRefreshResult {
  Error: Error;
  Life: string;
  Resolved: string;
  'provider-id'?: string;
}

interface UnitRefreshResults {
  Results: UnitRefreshResult[];
}

interface UnitSettings {
  version: number;
}

interface UnitStateResult {
  'charm-state': AdditionalProperties;
  error: Error;
  'meter-status-state': string;
  'relation-state': AdditionalProperties;
  'storage-state': string;
  'uniter-state': string;
}

interface UnitStateResults {
  results: UnitStateResult[];
}

interface UpgradeSeriesStatusParam {
  entity: Entity;
  message: string;
  status: string;
}

interface UpgradeSeriesStatusParams {
  params: UpgradeSeriesStatusParam[];
}

interface UpgradeSeriesStatusResult {
  error: Error;
  status: string;
  target: string;
}

interface UpgradeSeriesStatusResults {
  results: UpgradeSeriesStatusResult[];
}

interface AdditionalProperties {
  [key: string]: any;
}

/**
  UniterAPI implements the latest version (v18) of the Uniter API, which
  augments the payload of the CommitHookChanges API call and introduces
  the OpenedMachinePortRanges call as a replacement for AllMachinePorts.
*/
class UniterV18 {
  static NAME: string = 'Uniter';
  static VERSION: number = 18;

  version: number;
  _transport: any;
  _info: any;

  constructor(transport, info) {
    this.version = 18;
    this._transport = transport;
    this._info = info;

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  
  /**
    APIAddresses returns the list of addresses used to connect to the API.
  */
  aPIAddresses(): Promise<StringsResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'APIAddresses',
        version: 18,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    APIHostPorts returns the API server addresses.
  */
  aPIHostPorts(): Promise<APIHostPortsResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'APIHostPorts',
        version: 18,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ActionStatus returns the status of Actions by Tags passed in.
  */
  actionStatus(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'ActionStatus',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Actions returns the Actions by Tags passed and ensures that the Unit asking
    for them is the same Unit that has the Actions.
  */
  actions(params: Entities): Promise<ActionResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'Actions',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    AddMetricBatches adds the metrics for the specified unit.
  */
  addMetricBatches(params: MetricBatchParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'AddMetricBatches',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    AddUnitStorage validates and creates additional storage instances for units.
    Failures on an individual storage instance do not block remaining
    instances from being processed.
  */
  addUnitStorage(params: StoragesAddParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'AddUnitStorage',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ApplicationStatus returns the status of the Applications and its workloads
    if the given unit is the leader.
  */
  applicationStatus(params: Entities): Promise<ApplicationStatusResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'ApplicationStatus',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    AssignedMachine returns the machine tag for each given unit tag, or
    an error satisfying params.IsCodeNotAssigned when a unit has no
    assigned machine.
  */
  assignedMachine(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'AssignedMachine',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    AvailabilityZone returns the availability zone for each given unit, if applicable.
  */
  availabilityZone(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'AvailabilityZone',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    BeginActions marks the actions represented by the passed in Tags as running.
  */
  beginActions(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'BeginActions',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CanApplyLXDProfile is a shim to call the LXDProfileAPIv2 version of this method.
  */
  canApplyLXDProfile(params: Entities): Promise<BoolResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'CanApplyLXDProfile',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CharmArchiveSha256 returns the SHA256 digest of the charm archive
    (bundle) data for each charm url in the given parameters.
  */
  charmArchiveSha256(params: CharmURLs): Promise<StringResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'CharmArchiveSha256',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CharmModifiedVersion returns the most CharmModifiedVersion for all given
    units or applications.
  */
  charmModifiedVersion(params: Entities): Promise<IntResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'CharmModifiedVersion',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CharmURL returns the charm URL for all given units or applications.
  */
  charmURL(params: Entities): Promise<StringBoolResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'CharmURL',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ClearResolved removes any resolved setting from each given unit.
  */
  clearResolved(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'ClearResolved',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ClosePorts sets the policy of the port range with protocol to be
    closed, for all given units.
  */
  closePorts(params: EntitiesPortRanges): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'ClosePorts',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CloudAPIVersion returns the cloud API version, if available.
  */
  cloudAPIVersion(): Promise<StringResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'CloudAPIVersion',
        version: 18,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CloudSpec returns the cloud spec used by the model in which the
    authenticated unit or application resides.
    A check is made beforehand to ensure that the request is made by an entity
    that has been granted the appropriate trust.
  */
  cloudSpec(): Promise<CloudSpecResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'CloudSpec',
        version: 18,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CommitHookChanges batches together all required API calls for applying
    a set of changes after a hook successfully completes and executes them in a
    single transaction.
  */
  commitHookChanges(params: CommitHookChangesArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'CommitHookChanges',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ConfigSettings returns the complete set of application charm config
    settings available to each given unit.
  */
  configSettings(params: Entities): Promise<ConfigSettingsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'ConfigSettings',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    CurrentModel returns the name and UUID for the current juju model.
  */
  currentModel(): Promise<ModelResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'CurrentModel',
        version: 18,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Destroy advances all given Alive units' lifecycles as far as
    possible. See state/Unit.Destroy().
  */
  destroy(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'Destroy',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    DestroyAllSubordinates destroys all subordinates of each given unit.
  */
  destroyAllSubordinates(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'DestroyAllSubordinates',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    DestroyUnitStorageAttachments marks each storage attachment of the
    specified units as Dying.
  */
  destroyUnitStorageAttachments(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'DestroyUnitStorageAttachments',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    EnsureDead calls EnsureDead on each given entity from state. It
    will fail if the entity is not present. If it's Alive, nothing will
    happen (see state/EnsureDead() for units or machines).
  */
  ensureDead(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'EnsureDead',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    EnterScope ensures each unit has entered its scope in the relation,
    for all of the given relation/unit pairs. See also
    state.RelationUnit.EnterScope().
  */
  enterScope(params: RelationUnits): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'EnterScope',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    FinishActions saves the result of a completed Action
  */
  finishActions(params: ActionExecutionResults): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'FinishActions',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**

  */
  getMeterStatus(params: Entities): Promise<MeterStatusResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'GetMeterStatus',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetPodSpec gets the pod specs for a set of applications.
  */
  getPodSpec(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'GetPodSpec',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetPrincipal returns the result of calling PrincipalName() and
    converting it to a tag, on each given unit.
  */
  getPrincipal(params: Entities): Promise<StringBoolResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'GetPrincipal',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GetRawK8sSpec gets the raw k8s specs for a set of applications.
  */
  getRawK8sSpec(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'GetRawK8sSpec',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    GoalStates returns information of charm units and relations.
  */
  goalStates(params: Entities): Promise<GoalStateResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'GoalStates',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    HasSubordinates returns the whether each given unit has any subordinates.
  */
  hasSubordinates(params: Entities): Promise<BoolResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'HasSubordinates',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    LXDProfileName is a shim to call the LXDProfileAPIv2 version of this method.
  */
  lXDProfileName(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'LXDProfileName',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    LXDProfileRequired is a shim to call the LXDProfileAPIv2 version of this method.
  */
  lXDProfileRequired(params: CharmURLs): Promise<BoolResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'LXDProfileRequired',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    LeaveScope signals each unit has left its scope in the relation,
    for all of the given relation/unit pairs. See also
    state.RelationUnit.LeaveScope().
  */
  leaveScope(params: RelationUnits): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'LeaveScope',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Life returns the life status of every supplied entity, where available.
  */
  life(params: Entities): Promise<LifeResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'Life',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    LogActionsMessages records the log messages against the specified actions.
  */
  logActionsMessages(params: ActionMessageParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'LogActionsMessages',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Merge merges in the provided leadership settings. Only leaders for
    the given service may perform this operation.
  */
  merge(params: MergeLeadershipSettingsBulkParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'Merge',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelConfig returns the current model's configuration.
  */
  modelConfig(): Promise<ModelConfigResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'ModelConfig',
        version: 18,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ModelUUID returns the model UUID that this unit resides in.
    It is implemented here directly as a result of removing it from
    embedded APIAddresser *without* bumping the facade version.
    It should be blanked when this facade version is next incremented.
  */
  modelUUID(): Promise<StringResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'ModelUUID',
        version: 18,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    NetworkInfo returns network interfaces/addresses for specified bindings.
  */
  networkInfo(params: NetworkInfoParams): Promise<NetworkInfoResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'NetworkInfo',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**

  */
  openPorts(params: EntitiesPortRanges): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'OpenPorts',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    OpenedMachinePortRangesByEndpoint returns the port ranges opened by each
    unit on the provided machines grouped by application endpoint.
  */
  openedMachinePortRangesByEndpoint(params: Entities): Promise<OpenMachinePortRangesByEndpointResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'OpenedMachinePortRangesByEndpoint',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    PrivateAddress returns the private address for each given unit, if set.
  */
  privateAddress(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'PrivateAddress',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ProviderType returns the provider type used by the current juju
    model.
    
    TODO(dimitern): Refactor the uniter to call this instead of calling
    ModelConfig() just to get the provider type. Once we have machine
    addresses, this might be completely unnecessary though.
  */
  providerType(): Promise<StringResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'ProviderType',
        version: 18,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    PublicAddress returns the public address for each given unit, if set.
  */
  publicAddress(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'PublicAddress',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Read reads leadership settings for the provided service ID. Any
    unit of the service may perform this operation.
  */
  read(params: Entities): Promise<GetLeadershipSettingsBulkResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'Read',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ReadLocalApplicationSettings returns the local application settings for a
    particular relation when invoked by the leader unit.
  */
  readLocalApplicationSettings(params: RelationUnit): Promise<SettingsResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'ReadLocalApplicationSettings',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ReadRemoteSettings returns the remote settings of each given set of
    relation/local unit/remote unit.
  */
  readRemoteSettings(params: RelationUnitPairs): Promise<SettingsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'ReadRemoteSettings',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    ReadSettings returns the local settings of each given set of
    relation/unit.
    
    NOTE(achilleasa): Using this call to read application data is deprecated
    and will not work for k8s charms (see LP1876097). Instead, clients should
    use ReadLocalApplicationSettings.
  */
  readSettings(params: RelationUnits): Promise<SettingsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'ReadSettings',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Refresh retrieves the latest values for attributes on this unit.
  */
  refresh(params: Entities): Promise<UnitRefreshResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'Refresh',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Relation returns information about all given relation/unit pairs,
    including their id, key and the local endpoint.
  */
  relation(params: RelationUnits): Promise<RelationResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'Relation',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RelationById returns information about all given relations,
    specified by their ids, including their key and the local
    endpoint.
  */
  relationById(params: RelationIds): Promise<RelationResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'RelationById',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RelationsStatus returns for each unit the corresponding relation and status information.
  */
  relationsStatus(params: Entities): Promise<RelationUnitStatusResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'RelationsStatus',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RemoveStorageAttachments removes the specified storage
    attachments from state.
  */
  removeStorageAttachments(params: StorageAttachmentIds): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'RemoveStorageAttachments',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    RequestReboot sets the reboot flag on the provided machines
  */
  requestReboot(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'RequestReboot',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Resolved returns the current resolved setting for each given unit.
  */
  resolved(params: Entities): Promise<ResolvedModeResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'Resolved',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SLALevel returns the model's SLA level.
  */
  sLALevel(): Promise<StringResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'SLALevel',
        version: 18,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetAgentStatus will set status for agents of Units passed in args, if one
    of the args is not an Unit it will fail.
  */
  setAgentStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'SetAgentStatus',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetApplicationStatus sets the status for all the Applications in args if the given Unit is
    the leader.
  */
  setApplicationStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'SetApplicationStatus',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetCharmURL sets the charm URL for each given unit. An error will
    be returned if a unit is dead, or the charm URL is not known.
  */
  setCharmURL(params: EntitiesCharmURL): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'SetCharmURL',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetRelationStatus updates the status of the specified relations.
  */
  setRelationStatus(params: RelationStatusArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'SetRelationStatus',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetState sets the state persisted by the charm running in this unit
    and the state internal to the uniter for this unit.
  */
  setState(params: SetUnitStateArgs): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'SetState',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetStatus will set status for a entities passed in args. If the entity is
    a Unit it will instead set status to its agent, to emulate backwards
    compatibility.
  */
  setStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'SetStatus',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetUnitStatus sets status for all elements passed in args, the difference
    with SetStatus is that if an entity is a Unit it will set its status instead
    of its agent.
  */
  setUnitStatus(params: SetStatus): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'SetUnitStatus',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetUpgradeSeriesUnitStatus sets the upgrade series status of the unit.
    If no upgrade is in progress an error is returned instead.
  */
  setUpgradeSeriesUnitStatus(params: UpgradeSeriesStatusParams): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'SetUpgradeSeriesUnitStatus',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    SetWorkloadVersion sets the workload version for each given unit. An error will
    be returned if a unit is dead.
  */
  setWorkloadVersion(params: EntityWorkloadVersions): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'SetWorkloadVersion',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    State returns the state persisted by the charm running in this unit
    and the state internal to the uniter for this unit.
  */
  state(params: Entities): Promise<UnitStateResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'State',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    StorageAttachmentLife returns the lifecycle state of the storage attachments
    with the specified tags.
  */
  storageAttachmentLife(params: StorageAttachmentIds): Promise<LifeResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'StorageAttachmentLife',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    StorageAttachments returns the storage attachments with the specified tags.
  */
  storageAttachments(params: StorageAttachmentIds): Promise<StorageAttachmentResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'StorageAttachments',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UnitStatus returns the workload status information for the unit.
  */
  unitStatus(params: Entities): Promise<StatusResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'UnitStatus',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UnitStorageAttachments returns the IDs of storage attachments for a collection of units.
  */
  unitStorageAttachments(params: Entities): Promise<StorageAttachmentIdsResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'UnitStorageAttachments',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UpdateNetworkInfo refreshes the network settings for a unit's bound
    endpoints.
  */
  updateNetworkInfo(params: Entities): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'UpdateNetworkInfo',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UpdateSettings persists all changes made to the local settings of
    all given pairs of relation and unit. Keys with empty values are
    considered a signal to delete these values.
  */
  updateSettings(params: RelationUnitsSettings): Promise<ErrorResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'UpdateSettings',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    UpgradeSeriesUnitStatus returns the current preparation status of an
    upgrading unit.
    If no series upgrade is in progress an error is returned instead.
  */
  upgradeSeriesUnitStatus(params: Entities): Promise<UpgradeSeriesStatusResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'UpgradeSeriesUnitStatus',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    Watch starts an NotifyWatcher for each given entity.
  */
  watch(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'Watch',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchAPIHostPorts watches the API server addresses.
  */
  watchAPIHostPorts(): Promise<NotifyWatchResult> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'WatchAPIHostPorts',
        version: 18,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchActionNotifications returns a StringsWatcher for observing
    incoming action calls to a unit. See also state/watcher.go
    Unit.WatchActionNotifications(). This method is called from
    api/uniter/uniter.go WatchActionNotifications().
  */
  watchActionNotifications(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'WatchActionNotifications',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchConfigSettingsHash returns a StringsWatcher that yields a hash
    of the config values every time the config changes. The uniter can
    save this hash and use it to decide whether the config-changed hook
    needs to be run (or whether this was just an agent restart with no
    substantive config change).
  */
  watchConfigSettingsHash(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'WatchConfigSettingsHash',
        version: 18,
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
        type: 'Uniter',
        request: 'WatchForModelConfigChanges',
        version: 18,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchInstanceData is a shim to call the LXDProfileAPIv2 version of this method.
  */
  watchInstanceData(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'WatchInstanceData',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchLeadershipSettings will block the caller until leadership settings
    for the given service ID change.
  */
  watchLeadershipSettings(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'WatchLeadershipSettings',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**

  */
  watchMeterStatus(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'WatchMeterStatus',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchRelationUnits returns a RelationUnitsWatcher for observing
    changes to every unit in the supplied relation that is visible to
    the supplied unit. See also state/watcher.go:RelationUnit.Watch().
  */
  watchRelationUnits(params: RelationUnits): Promise<RelationUnitsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'WatchRelationUnits',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchStorageAttachments creates watchers for a collection of storage
    attachments, each of which can be used to watch changes to storage
    attachment info.
  */
  watchStorageAttachments(params: StorageAttachmentIds): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'WatchStorageAttachments',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchTrustConfigSettingsHash returns a StringsWatcher that yields a
    hash of the application config values whenever they change. The
    uniter can use the hash to determine whether the actual values have
    changed since it last saw the config.
  */
  watchTrustConfigSettingsHash(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'WatchTrustConfigSettingsHash',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchUnitAddressesHash returns a StringsWatcher that yields the
    hashes of the addresses for the unit whenever the addresses
    change. The uniter can use the hash to determine whether the actual
    address values have changed since it last saw the config.
  */
  watchUnitAddressesHash(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'WatchUnitAddressesHash',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchUnitRelations returns a StringsWatcher, for each given
    unit, that notifies of changes to the lifecycles of relations
    relevant to that unit. For principal units, this will be all of the
    relations for the application. For subordinate units, only
    relations with the principal unit's application will be monitored.
  */
  watchUnitRelations(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'WatchUnitRelations',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchUnitStorageAttachments creates watchers for a collection of units,
    each of which can be used to watch for lifecycle changes to the corresponding
    unit's storage attachments.
  */
  watchUnitStorageAttachments(params: Entities): Promise<StringsWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'WatchUnitStorageAttachments',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WatchUpgradeSeriesNotifications returns a NotifyWatcher for observing changes to upgrade series locks.
  */
  watchUpgradeSeriesNotifications(params: Entities): Promise<NotifyWatchResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'WatchUpgradeSeriesNotifications',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
  /**
    WorkloadVersion returns the workload version for all given units or applications.
  */
  workloadVersion(params: Entities): Promise<StringResults> {
    return new Promise((resolve, reject) => {

      const req: JujuRequest = {
        type: 'Uniter',
        request: 'WorkloadVersion',
        version: 18,
        params: params,
      };

      this._transport.write(req, resolve, reject);
    });
  }
  
}

export default UniterV18;
