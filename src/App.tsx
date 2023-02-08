/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react"
import {Text, View, StyleSheet} from "react-native"

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  }
})

type GreetingProps = {
  name: string
  greet: string
}

const Greeting = (props: GreetingProps) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!, {props.greet}</Text>
    </View>
  )
}

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name="Rexxar" greet="Good Morning!" />
      <Greeting name="Jaina" greet="Good Afternoon!" />
      <Greeting name="Valeera" greet="Good Evening!" />
    </View>
  )
}

export default LotsOfGreetings;
