export interface IContainerNodeData<T> {
    data: T;

    /**
     * Returns if this and that contain the same data
     * 
     * @param that another ContainerNode Data object
     */
    equalsValue(that: IContainerNodeData<T>): boolean;
}