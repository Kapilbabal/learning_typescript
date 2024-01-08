let obj: {name: string, age: number, place: string} = {
    name: "Kapil",
    age: 16,
    place: "India",
};

console.log(obj);

function obj_parser(obj: {name: string, age: number, place: string}) {
    console.log(`name: ${obj.name} age: ${obj.age} place: ${obj.place}`);

}

obj_parser(obj);

function return_obj(): {name: string, age: number, place: string} {
    return {
        name: "Kapil",
        age: 16,
        place: "India",
    };
}

return_obj();