import { ContainerNodeData } from "./ContainerNodeData";

export class ContainerNodeDataString implements ContainerNodeData<string> {
    constructor(private value: string) {}

    equalsValue(that: ContainerNodeData<string>): boolean {
        return this.value === (that as ContainerNodeDataString).value;
    }
}

export class ContainerNodeDataNumber implements ContainerNodeData<number> {
    constructor(private value: number) {}

    equalsValue(that: ContainerNodeData<number>): boolean {
        return this.value === (that as ContainerNodeDataNumber).value;
    }
}

export class ContainerNodeDataBoolean implements ContainerNodeData<boolean> {
    constructor(private value: boolean) {}

    equalsValue(that: ContainerNodeData<boolean>): boolean {
        return this.value === (that as ContainerNodeDataBoolean).value;
    }
}

export class ContainerNodeDataUndefined implements ContainerNodeData<undefined> {
    //eslint-disable-next-line
    equalsValue(that: ContainerNodeData<undefined>): boolean {
        return true; // Undefined values are always equal
    }
}

export class ContainerNodeDataNull implements ContainerNodeData<null> {
    //eslint-disable-next-line
    equalsValue(that: ContainerNodeData<null>): boolean {
        return true; // Null values are always equal
    }
}

export class ContainerNodeDataSymbol implements ContainerNodeData<symbol> {
    constructor(private value: symbol) {}

    equalsValue(that: ContainerNodeData<symbol>): boolean {
        return this.value === (that as ContainerNodeDataSymbol).value;
    }
}

export class ContainerNodeDataBigInt implements ContainerNodeData<bigint> {
    constructor(private value: bigint) {}

    equalsValue(that: ContainerNodeData<bigint>): boolean {
        return this.value === (that as ContainerNodeDataBigInt).value;
    }
}
