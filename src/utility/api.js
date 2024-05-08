import 'react-native-get-random-values'
import { v4 } from 'uuid'
const mapContact = contact => {
    const {
    name, picture, phone, cell, email,
    } = contact;
    return {
        id: v4(),
        name: name.fisrt+ " " +name.last,
        avatar: picture.large,
        phone, 
        cell,
        email,
        favorite: Math.random() > 0.5,
    };
}
const fetchContacts = async () => {
    const response = await fetch('https://randomuser.me/api/?results=100&seed=fullstackio');
    const data = await response.json();
    return data.results.map(mapContact);
}
const fetchUserContacts = async () =>{
    const response = await fetch('https://randomuser.me/api/?seed=fullstackio');
    const userData = await response.json();
    return mapContact(userData.results[0]);
};

const fetchRandomContacts = async () =>{
    const response = await fetch('https://randomuser.me/api/');
    const userData = await response.json();
    return mapContact(userData.results[0]);
};

export {fetchContacts, fetchUserContacts, fetchRandomContacts};