import React, { useEffect, useState } from "react";
import { fetchUserContacts } from "../../utility/api";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import ContactThumbnail from "../../components/ContactThumbnail";
import colors from "../../utility/colors";

const User = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=> {
        fetchUserContacts()
        .then(
            user => {
                setUser(user);
                setLoading(false);
                setError(false);
            }
        )
        .catch(
            e => {
                setLoading(false);
                setError(true);
            }
        )
    });

    const {avatar, name, phone} = user;

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size='large' />}
            {error && <Text>Error...</Text>}
            {!loading && !error && (
                <ContactThumbnail avatar={avatar} name={name} phone={phone} />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
    },
})
export default User;