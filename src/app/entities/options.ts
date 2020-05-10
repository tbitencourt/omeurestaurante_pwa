export abstract class Option {
    constructor(name: string){
        this.name = name;
    }
    name: string;
}

export class YesOrNoOption extends Option{
    constructor(name: string){
        super(name);
    }
    selected: boolean = false;
}

export class SelectOption extends Option{
    description: string = null;
    preCondition: Option[] = null;
}