import { ContainerNode, ContainerNodeDataCopy } from "./ContainerNode";
import { IContainerNodeData } from "./IContainerNodeData";
import { IContainer } from "./IContainer";

/**
 * Represents a FIFO (First-In, First-Out) Queue.
 *
 * @typeparam T The type implementing the interface for the data
 * @typeparam U The type of data of elements stored
 */
export class FIFO<T extends IContainerNodeData<U>, U> implements IContainer<T, U> {
    private start: ContainerNode<T, U> | null;
    private end: ContainerNode<T, U> | null;

    /**
   * Initializes a new instance of the FIFO class with an optional initial node.
   *
   * @param initNode An optional initial node to start the queue. If not provided, the queue will be empty.
   */
    constructor(initNode: ContainerNode<T, U> | null) {
        this.start = initNode;
        this.end = initNode;
    }

    /**
   * @inheritdoc
   */
    public enqueue(node: ContainerNode<T, U>): void {
        const copiedNode = ContainerNodeDataCopy(node);

        if (this.start === null) {
            this.start = copiedNode;
            this.end = copiedNode;
        } else {
            this.end!.next = copiedNode;
            this.end = copiedNode;
        }
    }

    /**
   * @inheritdoc
   */
    public dequeue(): ContainerNode<T, U> | null {
        const dequeuedNode = this.start;

        if (dequeuedNode !== null && dequeuedNode.next === null) {
            this.start = null;
            this.end = null;
        } else if (dequeuedNode !== null) {
            this.start = dequeuedNode.next;
        }

        return dequeuedNode;
    }
}
