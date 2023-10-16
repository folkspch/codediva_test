import { View, Text, SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const BiometricSet = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1,margin:25,justifyContent:'center'}}>
            <Text style={{
                fontFamily: 'Prompt-SemiBold',
                fontSize: 20,
            }}>
                Touch ID
            </Text>
            <Text style={{
                fontFamily: 'Prompt-Regular',
                fontSize: 16,
                marginTop:25
            }}>
                ตั้งค่าล็อคอินด้วยลายนิ้วมือ
            </Text>
            <Text style={{
                fontFamily: 'Prompt-Regular',
                fontSize: 16,
            }}>
                เพื่อการเข้าถึงที่รวดเร็วขึ้น
            </Text>
            <View style={{alignSelf:'center',height:'50%',justifyContent:'center'}}>
                
                <Icon name="fingerprint" size={100} />
            </View>
            <TouchableOpacity style={{
                backgroundColor: '#51A0D5',
                padding: 13,
                borderRadius: 5,
                marginTop: 50,

            }}>
                <Text style={{
                    fontFamily: 'Prompt-Regular',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 16,
                }}>
                    ตั้งค่าลายนิ้วมือ
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                padding: 13,
                borderRadius: 5,
                marginTop: 40,
            }} onPress={() => navigation.navigate('Signin')}>
                <Text style={{
                    fontFamily: 'Prompt-Regular',
                    color: '#51A0D5',
                    textAlign: 'center',
                    fontSize: 16,
                }}>
                    ข้าม
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default BiometricSet