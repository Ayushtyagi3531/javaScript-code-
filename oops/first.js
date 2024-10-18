class Animals{
    constructor(name){
        this.name=name
    }
 get_name(){
    console.log(`Your name is ${this.name}`)
    }
}
obj=new Animals('Ayush Tyagi')
obj.get_name()