import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  };
  render(){
    return(
      <view>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            marginLeft: 125,
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
          onPress={this.playSound}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Sound 1
          </Text>
        </TouchableOpacity>
        <br></br>

        <TouchableOpacity
          style={{
            backgroundColor: 'grey',
            marginLeft: 125,
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
          onPress={this.playSound}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Sound 2
          </Text>
        </TouchableOpacity>
        <br></br>

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            marginLeft: 125,
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
          onPress={this.playSound}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Sound 3
          </Text>
        </TouchableOpacity>
        <br></br>

        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            marginLeft: 125,
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
          onPress={this.playSound}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Sound 4
          </Text>
        </TouchableOpacity>
        <br></br>

        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            marginLeft: 125,
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 125,
            height: 50,
            borderRadius: 50,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Stop Sound
          </Text>
        </TouchableOpacity>
        <br></br>
      </view>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 25 }}>
        <SoundButton />
      </View>
    );
  }
}
