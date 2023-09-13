import { IContainerNodeData } from "./IContainerNodeData";

export class ContainerNode<T extends IContainerNodeData<U>, U> {
    data: T;
    next: ContainerNode<T, U> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }

    public equalsValue(that: ContainerNode<T, U>): boolean {
        if (this.next !== null && that.next !== null) {
            return this.data.equalsValue(that.data) && this.next.equalsValue(that.next);
        } else if (this.next === null && that.next === null) {
            return this.data.equalsValue(that.data);
        } else {
            return false;
        }
    }
}

export function ContainerNodeDataCopy<T extends IContainerNodeData<U>, U>(node: ContainerNode<T, U>): ContainerNode<T, U> {
    /**
     * Copies data from one ContainerNode to a new ContainerNode object.
     * 
     * Arguments:
     *  node (ContainerNode<T, U>): the source node to copy from
     * 
     * Returns:
     *  ContainerNode<T, U>: the new node with copied data
     */
    return new ContainerNode<T, U>(node.data);
}
