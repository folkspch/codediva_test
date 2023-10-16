import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Welcome = ({ navigation }) => {

    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: "center"
        }}>
            <View style={{
                padding: 25,
            }}>
                <View style={{ position: 'absolute', marginLeft: 30, marginTop: -100 }}>
                    <Text
                        style={{
                            fontFamily: 'Prompt-Medium',
                            fontSize: 22,
                        }}>ยินดีต้อนรับ</Text>
                    <Text style={{
                        fontFamily: 'Prompt-Regular',
                        fontSize: 18,
                    }}>กรุณาเลือกภาษา</Text>
                </View>
                <View style={{}}>
                    <TouchableOpacity style={{
                        backgroundColor: '#51A0D5',
                        padding: 10,
                        borderRadius: 5,
                        marginVertical: 25

                    }} onPress={() => navigation.navigate('Term')}>

                        <Text style={{
                            fontFamily: 'Prompt-Regular',
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 16,
                        }}>
                            English
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: '#51A0D5',
                        padding: 10,
                        borderRadius: 5,
                    }} onPress={() => navigation.navigate('Term')}>
                        <Text style={{
                            fontFamily: 'Prompt-Regular',
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 16,
                        }}>
                            ไทย
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}

export default Welcome