export async function load() {
    const response = await fetch('http://www.boredapi.com/api/activity/');
    const json = await response.json();
    console.log(json);
    return json;
}