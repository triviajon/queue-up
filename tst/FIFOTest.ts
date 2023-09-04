import assert from "assert";
import { FIFO } from "../src/FIFO";
import { ContainerNode } from "../src/ContainerNode";
import { ContainerNodeData } from "../src/PrimitiveContainerNodeData"; 

describe("FIFO", () => {
    describe("constructor", () => {
        it("should create an empty queue when no initial node is provided", () => {
            const fifo = new FIFO<ContainerNodeData<number>, number>(null); 
            assert.strictEqual(fifo.dequeue(), null);
        });

        it("should create a queue with one node when an initial node is provided", () => {
            const initialNode = new ContainerNode<ContainerNodeData<number>, number>(new ContainerNodeData<number>(1)); 
            const fifo = new FIFO<ContainerNodeData<number>, number>(initialNode); 
            assert.strictEqual(fifo.dequeue()?.equalsValue(initialNode), true); 
        });
    });

    describe("enqueue", () => {
        it("should add a node to an empty queue", () => {
            const fifo = new FIFO<ContainerNodeData<number>, number>(null); 
            const node = new ContainerNode<ContainerNodeData<number>, number>(new ContainerNodeData<number>(1)); 
            fifo.enqueue(node);
            assert.strictEqual(fifo.dequeue()?.equalsValue(node), true); 
        });

        it("should add a node to a non-empty queue", () => {
            const initialNode = new ContainerNode<ContainerNodeData<number>, number>(new ContainerNodeData<number>(1)); 
            const fifo = new FIFO<ContainerNodeData<number>, number>(initialNode); 
            const node = new ContainerNode<ContainerNodeData<number>, number>(new ContainerNodeData<number>(2)); 
            fifo.enqueue(node);
            assert.strictEqual(fifo.dequeue()?.equalsValue(initialNode), true); 
            assert.strictEqual(fifo.dequeue()?.equalsValue(node), true); 
        });
    });

    describe("dequeue", () => {
        it("should return null when dequeuing from an empty queue", () => {
            const fifo = new FIFO<ContainerNodeData<number>, number>(null); 
            assert.strictEqual(fifo.dequeue(), null);
        });

        it("should return the first node and update the start pointer when dequeuing", () => {
            const node1 = new ContainerNode<ContainerNodeData<number>, number>(new ContainerNodeData<number>(1)); 
            const node2 = new ContainerNode<ContainerNodeData<number>, number>(new ContainerNodeData<number>(2)); 
            const fifo = new FIFO<ContainerNodeData<number>, number>(node1); 
            fifo.enqueue(node2);

            assert.strictEqual(fifo.dequeue()?.equalsValue(node1), true); 
            assert.strictEqual(fifo.dequeue()?.equalsValue(node2), true); 
        });

        it("should update the end pointer when dequeuing the last node", () => {
            const node = new ContainerNode<ContainerNodeData<number>, number>(new ContainerNodeData<number>(1)); 
            const fifo = new FIFO<ContainerNodeData<number>, number>(node); 

            assert.strictEqual(fifo.dequeue()?.equalsValue(node), true); 
            assert.strictEqual(fifo.dequeue(), null);
        });
    });
});
