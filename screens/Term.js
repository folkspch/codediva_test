import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
const Term = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'space-between'
        }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
                    <Icon name="arrow-left" size={20} color="#000000" />
                </View>
            </TouchableOpacity>
            <View style={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: 'white',
                height: '70%',
            }}>
                <View style={{ flexDirection: 'row', padding: 20 }}>
                    <Icon
                        name="file-alt"
                        style={{ fontSize: 24, color: '#51A0D5', paddingHorizontal: 10 }}
                    />
                    <Text style={{
                        fontFamily: 'Prompt-Medium',
                        color: 'black',
                        fontSize: 20,

                    }}>เงื่อนไขการใช้บริการ</Text>
                </View>
                <View style={{
                    marginHorizontal: 30,
                    borderBottomColor: '#d8d8d8',
                    borderBottomWidth: 1,
                }}></View>


            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 30, width: '100%' }}>
                <TouchableOpacity style={{ marginHorizontal: 10, borderColor: '#51A0D5', padding: 13, paddingHorizontal: '15%', borderWidth: 1, borderRadius: 5, }}>
                    <Text style={{
                        fontFamily: 'Prompt-Regular',
                        color: '#51A0D5',
                        fontSize: 15,
                    }}>
                        ปฏิเสธ
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 10, backgroundColor: '#51A0D5', padding: 13, paddingHorizontal: '15%', borderRadius: 5, }} onPress={() => navigation.navigate('Login')}>
                    <Text style={{
                        fontFamily: 'Prompt-Regular',
                        color: 'white',
                        fontSize: 15,
                    }}>
                        ยอมรับ
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Term