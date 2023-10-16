import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Checkbox } from 'native-base';
const Login = ({navigation}) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: "center"
        }}>
            <View style={{margin:25}}>
                <TextInput
                    style={{ fontFamily: 'Prompt-Regular', borderBottomWidth: 1, borderBottomColor: '#d8d8d8' }}
                    placeholder="ชื่อผู้ใช้งาน"
                />
                <TextInput
                    secureTextEntry={true}
                    style={{ fontFamily: 'Prompt-Regular', borderBottomWidth: 1, borderBottomColor: '#d8d8d8' }}
                    placeholder="รหัสผ่าน"
                />
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Checkbox >
                        <Text style={{ fontFamily: 'Prompt-Regular' }}>บันทึกการเข้าสู่ระบบ</Text>
                    </Checkbox>
                    <Text onPress={() => navigation.navigate('Forgot')} style={{ fontFamily: 'Prompt-Regular' }}>ลืมรหัสผ่าน?</Text>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: '#51A0D5',
                    padding: 13,
                    borderRadius: 5,
                    marginTop: 50
                }} onPress={() => navigation.navigate('RequestOTP')}>
                    <Text style={{
                        fontFamily: 'Prompt-Regular',
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 16,
                    }}>
                        เข้าสู่ระบบ
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 30 }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#d8d8d8' }} />
                    <View>
                        <Text style={{ width: 100, textAlign: 'center', fontFamily: 'Prompt-Regular', color: '#8d8d8d' }}>ไม่มีบัญชีผู้ใช้</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#d8d8d8' }} />
                </View>
                <TouchableOpacity style={{ borderColor: '#51A0D5', padding: 13, borderWidth: 1, borderRadius: 5, }}>
                    <Text style={{
                        fontFamily: 'Prompt-Regular',
                        color: '#51A0D5',
                        textAlign: 'center',
                        fontSize: 15,
                    }}>
                        เปิดบัญชีเพื่อลงทะเบียนผู้ใช้
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default Login