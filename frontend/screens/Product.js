import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'

const Product = () => {
    const types = [
        {
            id:"0",
            image:"https://i0.wp.com/merci-fit.com/wp-content/uploads/sites/3/2023/03/sachet_cacao_pure_bio.jpg?resize=600%2C600&ssl=1",
            name:"Cacao Pur",
        },
        {
            id:"1",
            image:"https://i0.wp.com/merci-fit.com/wp-content/uploads/sites/3/2021/10/Baies-daronia.jpg?resize=600%2C600&ssl=1",
            name:"Baies D'aronia"
        },
        {
            id:"2",
            image:"https://i0.wp.com/merci-fit.com/wp-content/uploads/sites/3/2021/07/PISTACHE-2.jpg?resize=600%2C600&ssl=1",
            name:"Chamia 0%"
        },
        {
            id:"3",
            image:"https://ma.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/46/348092/1.jpg?4912",
            name:"Mousse Nivea",

        },
        {
            id:"4",
            image:"https://ucanbe.tn/storage/media/202401/5VmVIAtfdOkzA1QKVRJzjT0XEFP5rvhSxCFXR0Rp.jpg",
            name:"Shecare Shmpo"
        },
        {
            id:"4",
            image:"https://im.qccdn.fr/node/actualite-alimentation-panzani-confond-pates-seches-et-pates-fraiches-107634/thumbnail_1000x600px-117134.jpg",
            name:"Pate Panzani"
        }
    ]

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item,index) => (
            <View style={{margin:10}} key={index}>
                <Image source={{uri:item.image}} style={{width:60,height:60,borderRadius:30,marginRight:8,marginLeft:3}}/>
                <Text style={{marginTop:6,textAlign:"center",fontSize:12}}>{item.name}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})