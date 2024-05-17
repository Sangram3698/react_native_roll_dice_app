/* eslint-disable prettier/prettier */
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'

import DiceOne from './asset/One.png'
import DiceTwo from './asset/Two.png'
import DiceThree from './asset/Three.png'
import DiceFour from './asset/Four.png'
import DiceFive from './asset/Five.png'
import DiceSix from './asset/Six.png'

type DiceProps=PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>

const Dice =({imageUrl}:DiceProps):JSX.Element=>{
  return(
    <View>
      <Image
      style={styles.diceImage}
      source={imageUrl}
      />
    </View>
  );
}

export default function App(): JSX.Element {

  const [diceImage,setDiceImage]=useState<ImageSourcePropType>(DiceOne)

  const rollDiceOnTap=()=>{
    let randNum=Math.floor(Math.random() * 6) +1;

    switch(randNum){
    case 1:
      setDiceImage(DiceOne);
      break;
    case 2:
      setDiceImage(DiceTwo)
      break;
    case 3:
      setDiceImage(DiceThree)
      break;
    case 4:
      setDiceImage(DiceFour);
      break;
    case 5:
      setDiceImage(DiceFive)
      break;
    case 6:
      setDiceImage(DiceSix)
      break;
    default:
      setDiceImage(DiceOne)
      break;
    }
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable
      onPress={rollDiceOnTap}
      >
        <Text style={styles.rollDiceBtnTxt}>
          Roll the Dice
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff2ff'
  },
  diceContainer:{
    margin:12
  },
  diceImage:{
    width:200,
    height:200
  },
  rollDiceBtnTxt:{
    paddingVertical:10,
    paddingHorizontal:40,
    borderWidth:2,
    borderRadius:6,
    borderColor:'#E5E0FF',
    fontSize:16,
    color:'#8EA7E9',
    fontWeight:'700',
    textTransform:'uppercase'

  }
})