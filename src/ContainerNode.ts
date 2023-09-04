import { ContainerNodeData } from "./ContainerNodeData";

export class ContainerNode<T> {
    data: ContainerNodeData<T>;
    next: ContainerNode<T> | null;

    constructor(data: ContainerNodeData<T>) {
        this.data = data;
        this.next = null;
    }

    public equalsValue(that: ContainerNode<T>): boolean {
        if (this.next !== null && that.next !== null) {
            return this.data.equalsValue(that.data) && this.next.equalsValue(that.next);  
        } else if (this.next === null && that.next === null) {
            return this.data.equalsValue(that.data);
        } else {
            return false;
        }
    }
}


export function ContainerNodeDataCopy<T>(node: ContainerNode<T>): ContainerNode<T> {
    /**
     * Copys data from one ContainerNode to a new ContainerNode object.
     * 
     * Arguments:
     *  node (ContainerNode<T>): the src node to copy from
     * 
     * Returns:
     *  ContainerNode<T>: the new node with copied data
     */
    return new ContainerNode<T>(node.data);
}