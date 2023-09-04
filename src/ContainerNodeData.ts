export interface ContainerNodeData<T> {
    /**
     * Returns if this and that contain the same data
     * 
     * @param that another ContainerNode Data object
     */
    equalsValue(that: ContainerNodeData<T>): boolean;
}