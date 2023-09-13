import { IContainerNodeData } from "./IContainerNodeData";

export class ContainerNodeData<T> implements IContainerNodeData<T> {
    constructor(public data: T) {}

    public equalsValue(that: IContainerNodeData<T>): boolean {
        return this.data === that.data;
    }
}
