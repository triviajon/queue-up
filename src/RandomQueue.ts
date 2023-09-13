import { ContainerNode, ContainerNodeDataCopy } from "./ContainerNode";
import { IContainerNodeData } from "./IContainerNodeData";
import { IContainer } from "./IContainer";
import { INodeWithPredecessor } from "./INodeWithPredecessor";

/**
 * Represents a randomized queue. Dequeued elements will be from an unspecified order.
 * @typeparam T The type implementing the interface for the data
 * @typeparam U The type of data of elements stored
 */
export class RandomQueue<T extends IContainerNodeData<U>, U> implements IContainer<T, U> {
    private start: ContainerNode<T, U> | null;
    private end: ContainerNode<T, U> | null;
    private length: number;

    constructor(initNode: ContainerNode<T, U> | null) {
        this.start = initNode;
        this.end = initNode;
        this.length = initNode === null ? 0 : 1;
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

        this.length++;
    }

    /**
   * @inheritdoc
   */
    public dequeue(): ContainerNode<T, U> | null {
        if (this.length === 0) {
            return null;
        } else if (this.length === 1) {
            const dequeuedNode = this.start;
            this.start = null;
            this.end = null;
            this.length = 0;
            return dequeuedNode;
        }

        const {predecessor, selectedNode} = this.randomSelect();
        if (predecessor !== null) {
            predecessor.next = selectedNode.next;
        }
        
        return selectedNode;
    }

    private randomSelect(): INodeWithPredecessor<T, U> {
        let predecessor: ContainerNode<T, U> | null = null;
        let currentNode: ContainerNode<T, U> = this.start!;

        for (let i = 1; i < this.length; ++i) {
            const probSelect = 1 / (this.length - i);
            const randNumb = Math.random();

            predecessor = currentNode;
            currentNode = currentNode.next!;
    
            if (randNumb <= probSelect) {
                break;
            }
        }

        return {
            predecessor: predecessor,
            selectedNode: currentNode
        };
    }
    
}
