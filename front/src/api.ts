export interface Number{
item: number;
}


async function Getnum(Number: number):Promise<number> {
    const response = await fetch('http://localhost:3001/multiplication',{
        method:'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({item:Number}),
    });
return await response.json();
}