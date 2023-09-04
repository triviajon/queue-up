import { strict as assert } from "assert";
import { RandomQueue } from "../src/RandomQueue";
import { ContainerNode } from "../src/ContainerNode";
import { ContainerNodeData } from "../src/PrimitiveContainerNodeData"; 

describe("RandomQueue", () => {
    describe("enqueue", () => {
        it("should add an item to the queue", () => {
            const node = new ContainerNode<ContainerNodeData<number>, number>(new ContainerNodeData<number>(42));
            const queue = new RandomQueue<ContainerNodeData<number>, number>(null);

            queue.enqueue(node);

            const dequeuedNode = queue.dequeue();
            
            assert.strictEqual(dequeuedNode?.data.equalsValue(node.data), true);
        });
    });

    describe("dequeue", () => {
        it("should return null when the queue is empty", () => {
            const queue = new RandomQueue<ContainerNodeData<number>, number>(null);

            const dequeuedNode = queue.dequeue();

            assert.strictEqual(dequeuedNode, null);
        });

        it("should dequeue the last item correctly", () => {
            const node = new ContainerNode<ContainerNodeData<number>, number>(new ContainerNodeData<number>(42));
            const queue = new RandomQueue<ContainerNodeData<number>, number>(node);

            const dequeuedNode = queue.dequeue();

            assert.strictEqual(dequeuedNode?.data.equalsValue(node.data), true);
            assert.strictEqual(queue.dequeue(), null);
        });

        it("should dequeue items correctly", () => {
            const queue = new RandomQueue<ContainerNodeData<number>, number>(null);
            const node1 = new ContainerNode<ContainerNodeData<number>, number>(new ContainerNodeData<number>(1));
            const node2 = new ContainerNode<ContainerNodeData<number>, number>(new ContainerNodeData<number>(2));
            const node3 = new ContainerNode<ContainerNodeData<number>, number>(new ContainerNodeData<number>(3));

            queue.enqueue(node1);
            queue.enqueue(node2);
            queue.enqueue(node3);

            const dequeuedNode = queue.dequeue();
            assert.ok(dequeuedNode !== null);
            assert.ok([node1, node2, node3].some(node => node.data.equalsValue(dequeuedNode.data)));
        });
    });
});
