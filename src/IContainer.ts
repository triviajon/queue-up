import { ContainerNode } from "./ContainerNode";

export interface IContainer<T> {
  /**
   * Initializes a new instance of the class with an optional initial node.
   *
   * @param initNode An optional initial node to start the container. If not provided, the  will be empty.
   */
  enqueue(node: ContainerNode<T>): void;

  /**
   * Removes and returns the node from the container.
   *
   * @returns The node removed, or null if the queue is empty.
   */
  dequeue(): ContainerNode<T> | null;
}
