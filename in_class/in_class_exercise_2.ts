class anyType<T>{
    value: T;

    constructor(i: T) {
        this.value = i
    }

    funType(): void {
        if(typeof this.value == 'boolean'){
            console.log("Not everything is in Black/White");
        }
        else if(typeof this.value == 'function'){
            this.value();
        }
        else if(typeof this.value == 'number'){
            console.log(this.value + 10);
        }
        else if(typeof this.value == 'object'){
            console.table(this.value);
        }
        else if(typeof this.value == 'string'){
            console.log(this.value.toLowerCase());
        }
    }
}