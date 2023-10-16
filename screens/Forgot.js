import { View, Text, SafeAreaView, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
const Forgot = ({navigation}) => {
    return (
        <SafeAreaView style={{ margin: 25 }}>
             <TouchableOpacity onPress={() => navigation.goBack()}>
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', padding: 2,marginLeft:0 }}>
                    <Icon name="arrow-left" size={20} color="#000000" />
                </View>
            </TouchableOpacity>
            <View style={{ width: '70%' ,marginTop:25}}>
                <Text style={{ fontFamily: 'Prompt-SemiBold', fontSize: 23 }}>ลืมรหัสผ่าน?</Text>
                <Text style={{ fontFamily: 'Prompt-Regular' ,marginTop:10,fontSize: 16}}>กรุณากรอกอีเมลล์หรือเบอร์โทรศัพท์ที่ลงทะเบียน</Text>
            </View>
            <View style={{marginTop:100}}>
                <TextInput
                    style={{ fontFamily: 'Prompt-Regular', borderBottomWidth: 1, borderBottomColor: '#d8d8d8' }}
                    placeholder="อีเมล / เบอร์โทรศัพท์"
                />
            </View>
            <TouchableOpacity style={{
                backgroundColor: '#51A0D5',
                padding: 13,
                borderRadius: 5,
                marginTop: 50
            }} onPress={() => navigation.navigate('ForgotReset')}>
                <Text style={{
                    fontFamily: 'Prompt-Regular',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 16,
                }}>
                    ส่ง
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Forgot