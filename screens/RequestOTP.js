import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
const RequestOTP = ({navigation}) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
             <TouchableOpacity onPress={() => navigation.goBack()} style={{position:'absolute',top:10,left:10}}>
                <View
                    style={{padding: 20 }}>
                    <Icon name="arrow-left" size={20} color="#000000" />
                </View>
            </TouchableOpacity>
            <Icon name="mobile-alt" size={120} color="#51A0D5" />
            <Text style={{
                fontFamily: 'Prompt-SemiBold',
                fontSize: 23,
                marginTop: 50
            }}>
                OTP จะถูกส่งไปที่เบอร์โทรศัพท์
            </Text>
            <Text style={{
                fontFamily: 'Prompt-Regular',
                fontSize: 20,
                marginTop: 15,
                color: "#51A0D5"
            }}>
                082-XXX-8998
            </Text>
            <TouchableOpacity style={{
                backgroundColor: '#51A0D5',
                padding: 13,
                borderRadius: 5,
                marginTop: 50,
                width: '85%'
            }} onPress={() => navigation.navigate('VerifyOTP')}>
                <Text style={{
                    fontFamily: 'Prompt-Regular',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 16,
                }}>
                    ขอรหัส OTP
                </Text>
            </TouchableOpacity>
            <Text style={{
                fontFamily: 'Prompt-Regular',
                fontSize: 12,
                marginTop:20,
            }}>
                กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อเบอร์ 02-XXX-XXXX
            </Text>

        </SafeAreaView>
    )
}

export default RequestOTP