export function greet(name = "Guest"){
    console.log(`Hello ${name}`);
}
//greet("Basco")
const data = [
    {id:1, name: 'item1', description: 'description for item1'},
    {id:2, name: 'item2', description: 'description for item2'},
    {id:3, name: 'item3', description: 'description for item3'}
]
export async function fetchData() {
    return await new Promise((resolve, reject) => {
            resolve(data)
            console.log(data)
        
})
}