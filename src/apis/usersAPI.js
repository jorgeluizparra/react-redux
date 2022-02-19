import axios from 'axios';

export async function fetchUsers() {
    const { data } = await axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data');
    return data;
}
