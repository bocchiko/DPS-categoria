import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

export default function Cat(){
    const catData = [
        {
          name: 'Gato Persa',
          origin: 'Irán',
          image: 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/O5ZP5HO5Z5BDNIZ2UALVB55CMU.png',
        },
        {
          name: 'Maine Coon',
          origin: 'Estados Unidos',
          image: 'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2021-02/CAT%20BREED%20Hero%20Mobile_0022_Maine_coon.jpg?itok=yar9WqXW',
        },
        {
          name: 'Siamés',
          origin: 'Tailandia',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Siam_lilacpoint.jpg/320px-Siam_lilacpoint.jpg',
        },
        {
          name: 'Sphynx',
          origin: 'Diversos',
          image: 'https://www.dailypaws.com/thmb/CZ9HUN1klzHel0IM6QaA6EfkSaw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sphynx-square-standing-553638123-3c81f6697a3c427ebeb185d33ce87cc6.jpg',
        },
        {
          name: 'British Shorthair',
          origin: 'Reino Unido',
          image: 'https://media.istockphoto.com/id/104355461/photo/front-view-of-british-shorthair-cat-7-months-old-sitting.jpg?s=612x612&w=0&k=20&c=OXg47eem5DnX2WkX_kcDaZcl5-ARAbaBt6Bu5kLY7LM=',
        },
      ];
    
      return (
        <ScrollView contentContainerStyle={styles.container}>
          {catData.map((cat, index) => (
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
