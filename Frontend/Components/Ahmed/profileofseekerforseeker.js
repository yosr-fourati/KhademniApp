import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { openBrowserAsync } from 'expo-web-browser';






export default function Profileofseekerforseeker({navigation}) {
    const [follow, setfollow] = useState(false);
    const menuItemsToDisplay = [
        { name: 'service cuisson ', id: '1A', number: '4' },
        { name: 'cherche serveur', id: '2B', number: '5' },
        { name: 'service cuisson ', id: '3C', number: '5' },
        { name: 'cherche serveuse ', id: '4D', number: '5' },
        { name: 'service cuisson ', id: '5E', number: '4' },
        { name: 'cherche serveur', id: '6F', number: '4' },
        { name: 'service cuisson ', id: '7G', number: '4' },
        { name: 'cherche serveur', id: '8H', number: '3' },
    ];

    const Item = ({ name, number }) => (
        <View style={styles.containerflatlist} >
            <Text style={styles.textrating}>{name}</Text>
            <Ionicons style={styles.star} size={17} name="star-outline"> </Ionicons>
            <Text style={styles.numberating} >{number}</Text>
        </View>);

    const renderItem = ({ item }) => <Item name={item.name} number={item.number} />;

const handleall =() =>{
    setfollow(!follow)
    navigation.navigate("ServiceSeeker3")

}

    return (
        <View style={styles.container}>
   
            <View style={styles.headercontainer}>
                <View style={styles.containerprofile}>
                    <Image style={styles.imageprofile} resizeMode="contain" source={require("./257343671_446285320177426_6925597833109609576_n-e1640194834882.jpg")} />
                    <View>
                        <Text style={styles.nomprofile}>Melik Belkhiria </Text>
                        <View style={styles.reviewcontainer}>
                            <Text style={styles.textrating}>Note globale :</Text>
                            <Ionicons style={styles.star} size={17} name="star"></Ionicons>
                            <Text style={styles.numberating}> 4</Text>
                        </View>
                        <TouchableOpacity style={styles.follow} onPress={() => navigation.navigate("ServiceSeeker3")}>
                            <View style={styles.containerfollow}>
                                <Ionicons style={styles.iconfollow} size={25} name="create-outline"></Ionicons>

                                <Text style={styles.followtext}> Edit Profile </Text>
                            </View>
                        </TouchableOpacity>

                    </View>


                </View>
            </View>
            <View style={styles.bodycontainer}>

                <Text style={styles.titles}>
                    Description
                </Text>
                <Text style={styles.description}>
                Bonjour, je m'appelle Pierre et je suis intéressé par le poste que vous proposez. Je suis un travailleur respectueux et j'apprécie 
                la collaboration en équipe. j'ai été reconnu pour mon travail acharné J'ai toujours été ponctuel et j'ai respecté les délais . 
                </Text>
                <Text style={styles.titles}>
                    CV
                </Text>
                <TouchableOpacity onPress={() => openBrowserAsync("https://www.africau.edu/images/default/sample.pdf")} style={styles.downloadcv}>
                    <Text>Download CV</Text>
                </TouchableOpacity>
                <Text style={styles.titles}>
                    Offres d'emploi qui ont été publiées:
                </Text>
                <View style={styles.listratingcontainer}>
                    <FlatList data={menuItemsToDisplay}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}>

                    </FlatList>

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    headercontainer: {
        flex: 0.25,
        flexDirection: 'row',
       
    },
    containerprofile: {
        flexDirection: 'row',
        marginTop: 20
    },
    containerfollow: {
        flexDirection: 'row',

    },
    bodycontainer: {
        flex: 0.66,
        marginTop: 60,
        marginLeft: 20
    },
    listratingcontainer: {
        flex: 1
    },
    containerflatlist: {
        flexDirection: 'row'
    },
    goback:{
        marginTop:35,
        marginLeft:18
    },


    imageprofile: {
        width: 158,
        height: 154,
        borderRadius: 80,
        marginLeft:14,

    },
    nomprofile: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 26,
        marginTop: 10
    },
    textrating: {
        fontSize: 16,
        paddingLeft: 27,
        marginTop: 10,


    },
    follow: {
        backgroundColor: '#18C0C1',
        width: 150,
        alignItems: 'center',
        borderRadius: 8,
        padding: 6,
        marginTop: 20,
        marginLeft: 26


    },
    downloadcv: {
        backgroundColor: '#18C0C1',
        width: 150,
        alignItems: 'center',
        borderRadius: 8,
        padding: 6,
        marginTop: 5,
        marginBottom: 16
    },
    followtext: {
        fontSize: 16,
        color: 'white',
        padding: 2,
        paddingLeft: 7

    },
    iconfollow: {
        color: 'white',

    },
    reviewcontainer: {
        flexDirection: 'row'
    },
    star: {
        paddingLeft: 12,
        marginTop: 12,
        color: '#D5AB55'
    },
    numberating: {
        fontSize: 16,
        paddingLeft: 3,
        marginTop: 10,
        fontWeight: 'bold',
    },
    titles: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 4,
        color: '#0e7676'
    },
    description: {
        paddingBottom: 18
    }
})