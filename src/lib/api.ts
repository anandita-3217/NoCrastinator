export async function getNoReason(){
    const res = await fetch('http://loacalhost:5000/no');
    if (!res.ok) throw new Error('Proxy Failed!');
    return res.json();
}