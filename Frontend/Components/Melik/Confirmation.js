import {React, useState} from 'react';
import { StyleSheet, Text, View, Image,Pressable,ImageBackground} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Ionicons } from '@expo/vector-icons';

import ConfirmCard from './ConfirmCard'




export default function Confirmation({ route,navigation }) {
  const { Title, Statut, Date, uri, onConfirm } = route.params;
const [sortOption, setSortOption] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [openSortOption, setOpenSortOption] = useState(false);
const [openSortOrder, setOpenSortOrder] = useState(false);
  const [candidates, setCandidates] = useState([
    { id: 0, fullName: 'Maria Ben Moulehem', location: 'Tunis', date: '14/02/2023', uri: 'https://th.bing.com/th/id/OIP.VNkoI19GPy5Cm9MTlFHO8wAAAA?pid=ImgDet&rs=1', rating: 4 },
    { id: 1, fullName: 'Salima Ben Yedder', location: 'Sousse', date: '10/02/2023', uri: 'https://th.bing.com/th/id/OIP.9sj4_jr5ogcNLp41F4n7OwHaLH?pid=ImgDet&rs=1', rating: 3 },
  ]);
  
  const sortCandidates = (option, order) => {
    let sortedCandidates = [...candidates];
    if (option === 'rating') {
      sortedCandidates.sort((a, b) => order === 'asc' ? -a.rating + b.rating : - b.rating + a.rating);
    }
    return order === 'desc' ? sortedCandidates.reverse() : sortedCandidates;
  };

  const onReject = (id) => {
     setCandidates(candidates.filter((item) => item.id !== id ))
  }


 


  return (
    <ImageBackground source={require("../../assets/image5.png")} style={styles.container}>
         <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{Title}</Text>
        </View>
        {uri && <Image style={styles.image} source={{ uri }} />}
      </View>

  <View style={styles.filterContainer}>
  <Ionicons
          name="star"
          size={40}
          color="gold"

        />
    <DropDownPicker
      items={[
        { label: 'Ascending', value: 'asc' },
        { label: 'Descending', value: 'desc' },
      ]}
      defaultValue={sortOrder}
      placeholder="Order"
      containerStyle={{ height: 40, width: 150 }}
      open={openSortOrder}
      setOpen={setOpenSortOrder}
      value={sortOrder}
      labelStyle={{color:"white"}}
      style={{ backgroundColor: '#18C0C1' }}
      setValue={setSortOrder}
      
    />
</View>

 
{sortCandidates(sortOption, sortOrder).map((service) => (
        <ConfirmCard key={service.id} name={service.fullName} Location={service.location} Date={service.date} rating={service.rating} uri={service.uri} id={service.id} onReject={onReject} onConfirm={onConfirm} />
      ))}


      <View style={styles.content}>
        {/* Your confirmation content */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:'center',
  },

  filterContainer:{
    flexDirection:'row',
    marginTop:5,
    zIndex:2
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop:40
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft:30
  },
  image: {
    width:80,
    height: 80,
    borderRadius: 40,
    marginRight:50
  },

  statut: {
    fontSize: 11,
    marginLeft: 30,
    fontWeight:'bold',
    marginTop:10
  },
  statutText: {
    paddingHorizontal: 5, // Change this value to adjust the padding
    paddingVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
    fontWeight: 'bold',
    backgroundColor:'yellow',
    width:69
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
