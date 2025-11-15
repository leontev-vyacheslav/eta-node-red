import type { DescriptiveBaseModel } from "../abstractions/descriptive-base-model";
import type { EntityModel } from "../abstractions/entity-base-model";
import type { TimestampBaseModel } from "../abstractions/timestamp-base-model";
import type { DeviceModel } from "./device-model";

export interface FlowModel extends EntityModel, DescriptiveBaseModel, TimestampBaseModel {
    uid: string;

    devices: DeviceModel[];
}