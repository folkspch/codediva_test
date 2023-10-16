import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
const ForgotReset = () => {
    return (
        <SafeAreaView>
            <View style={{
                alignItems: 'center',
            }}>
                <View style={{ marginTop: 100 }}>
                    <Icon name="check-circle" size={200} color="#51A0D5" />
                </View>
                <Text style={{ fontFamily: 'Prompt-SemiBold', fontSize: 25, marginTop: 70 }}>สำเร็จ</Text>
                <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 18, marginTop: 20 }}>รีเซ็ตรหัสผ่านของคุณสำเร็จแล้ว</Text>
                <TouchableOpacity style={{
                backgroundColor: '#51A0D5',
                padding: 13,
                borderRadius: 5,
                marginTop: 50,
                width: '85%'
            }}>
                <Text style={{
                    fontFamily: 'Prompt-Regular',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 16,
                }}>
                    ตกลง
                </Text>
            </TouchableOpacity>
            </View>
            

        </SafeAreaView>
    )
}

export default ForgotReset