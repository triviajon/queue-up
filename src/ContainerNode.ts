export class ContainerNode<T> {
    data: T;
    next: ContainerNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}
