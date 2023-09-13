import { ContainerNode } from "./ContainerNode";
import { IContainerNodeData } from "./IContainerNodeData";

export interface INodeWithPredecessor<T extends IContainerNodeData<U>, U> {
    selectedNode: ContainerNode<T, U>;
    predecessor: ContainerNode<T, U> | null;
}