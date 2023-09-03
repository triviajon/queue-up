import { ContainerNode } from "./ContainerNode";
import { IContainer } from "./IContainer";

/**
 * Represents a FIFO (First-In, First-Out) Queue.
 *
 * @typeparam T The type of elements stored in the queue.
 */
export class FIFO<T> implements IContainer<T> {
    private start: ContainerNode<T> | null;
    private end: ContainerNode<T> | null;

    /**
   * Initializes a new instance of the FIFO class with an optional initial node.
   *
   * @param initNode An optional initial node to start the queue. If not provided, the queue will be empty.
   */
    constructor(initNode: ContainerNode<T> | null) {
        this.start = initNode;
        this.end = null;
    }

    /**
   * @inheritdoc
   */
    public enqueue(node: ContainerNode<T>): void {
        throw new Error("Not Implemented Yet.");
    }

    /**
   * @inheritdoc
   */
    public dequeue(): ContainerNode<T> | null {
        throw new Error("Not Implemented Yet.");
    }
}
