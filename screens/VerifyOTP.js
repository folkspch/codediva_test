import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import OTPInput from '../components/OTPinput';
import Icon from 'react-native-vector-icons/FontAwesome5';
function VerifyOTP({ navigation }) {
    const [OTP, setOTP] = useState([]);
    const initialCountdownValue = 60;
    const [countdown, setCountdown] = useState(initialCountdownValue);
    useEffect(() => {
        const interval = setInterval(() => {
            if (countdown > 0) {
                setCountdown(countdown - 1);
            } else {
                setCountdown(initialCountdownValue);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [countdown]);
    const handleInputValue = (data) => {
        setOTP(data);
            const allHaveValues = data.every((element) => element !== "");
            if (allHaveValues) {
                navigation.navigate('CreatePIN')
            }
    };

    return (
        <SafeAreaView style={{}}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 10, left: 10 }}>
                <View
                    style={{ padding: 20 }}>
                    <Icon name="arrow-left" size={20} color="#000000" />
                </View>
            </TouchableOpacity>
            <View style={{ margin: 25 }}>
                <Text style={{
                    fontFamily: 'Prompt-SemiBold',
                    fontSize: 23,
                    marginTop: 50,
                    color: 'black'
                }}>
                    ยืนยันตัวตน
                </Text>
                <Text style={{
                    fontFamily: 'Prompt-Regular',
                    fontSize: 16,
                    marginTop: 10
                }}>
                    กรุณากรอกรหัสยืนยันที่เราส่งให้คุณ
                </Text>
                <Text style={{
                    fontFamily: 'Prompt-Regular',
                    fontSize: 16,
                    marginTop: 10
                }}>
                    082-XXX-8998
                </Text>
                <View style={{ marginTop: 60 }}>
                    <OTPInput length={6} inputValue={handleInputValue} />
                </View>
                <Text style={{
                    fontFamily: 'Prompt-Regular',
                    fontSize: 17,
                    marginTop: 100,
                    alignSelf: 'center'
                }}>
                    หากคุณไม่ได้รับรหัส?
                </Text>
                <Text style={{
                    fontFamily: 'Prompt-Regular',
                    fontSize: 16,
                    marginTop: 15,
                    color: '#51A0D5',
                    alignSelf: 'center'
                }}>
                    ส่งรหัสใหม่ ({countdown})
                </Text>
            </View>

        </SafeAreaView>
    );
}

export default VerifyOTP;
