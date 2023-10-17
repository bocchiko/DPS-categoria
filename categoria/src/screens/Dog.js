import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

export default function Dog(){
    const dogData = [
        {
          name: 'Labrador Retriever',
          origin: 'Canadá',
          image: 'https://labradores.org/wp-content/uploads/2020/05/labrador-amarillo.png',
        },
        {
          name: 'Bulldog',
          origin: 'Reino Unido',
          image: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-154306987-1667315883.jpg?crop=0.752xw:1.00xh;0.0929xw,0&resize=1200:*',
        },
        {
          name: 'German Shepherd',
          origin: 'Alemania',
          image: 'https://www.akc.org/wp-content/uploads/2017/11/German-Shepherd-on-White-00.jpg',
        },
        {
          name: 'Golden Retriever',
          origin: 'Reino Unido',
          image: 'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-140388410-e1692223356634.jpg?w=1024',
        },
        {
          name: 'Poodle',
          origin: 'Francia',
          image: 'https://purina.com.sv/sites/default/files/styles/webp/public/2022-10/purina-que-sabes-de-los-perros-poodle_0.jpg.webp?itok=NaXy7vRd',
        },
      ];
    
      return (
        <ScrollView contentContainerStyle={styles.container}>
          {dogData.map((cat, index) => (
            <View key={index} style={styles.card}>
              <Image style={styles.image} source={{ uri: cat.image }} />
              <Text style={styles.name}>{cat.name}</Text>
              <Text style={styles.origin}>{cat.origin}</Text>
            </View>
          ))}
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
      card: {
        marginBottom: 16,
        borderRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        padding: 16,
      },
      image: {
        width: 200,
        height: 150,
        resizeMode: 'cover',
        marginBottom: 8,
      },
      name: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      origin: {
        fontSize: 16,
      },
    });    
