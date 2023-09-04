import { ContainerNode } from "./ContainerNode";
import { IContainer } from "./IContainer";

/**
 * Represents a randomized queue. Dequeued elements will be from an unspecified order.
 *npm install source-map-support
 * @typeparam T The type of elements stored in the queue.
 */
export class RandomQueue<T> implements IContainer<T> {
    private start: ContainerNode<T> | null;
    private end: ContainerNode<T> | null;
    private length: number;

    constructor(initNode: ContainerNode<T> | null) {
        this.start = initNode;
        this.end = null;
        this.length = initNode === null ? 0 : 1;
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
