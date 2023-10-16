import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchID from 'react-native-touch-id';
const Signin = ({ navigation }) => {
    useEffect(() => {
        TouchID.isSupported()
            .then(() => {
                TouchID.authenticate('Authenticate with your biometric data')
                    .then((success) => {
                        if (success) {
                            Alert.alert("Logged In!")
                        }                          
                    })
                    .catch((error) => {
                    })
            })
            .catch((error) => {
                console.log(error)
            });
    }, [])

    const [PIN, setPIN] = useState(["", "", "", "", "", ""]);
    handleInput = (num) => {
        let temp = [...PIN]
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] === "") {
                temp[i] = num
                break;
            } else {
                continue
            }
        }
        setPIN(temp)
    }
    handleBackspace = () => {
        let temp = [...PIN]
        for (let i = temp.length - 1; i >= 0; i--) {
            if (temp[i] !== "") {
                temp[i] = ""
                break;
            }
            else {
                continue
            }
        }
        setPIN(temp)
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                fontFamily: 'Prompt-Regular',
                fontSize: 16,
                marginTop: 10,
                alignSelf: 'center',
                marginBottom: 20
            }}>กรุณากรอกรหัส PIN </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                {PIN.map((digit, index) => {
                    let style = digit !== '' ? styles.fillDot : styles.dot;
                    return <View style={style} key={index}></View>;
                })}
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '90%', height: 'auto', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 50 }}>
                <TouchableOpacity style={styles.number} onPress={() => handleInput(1)}>
                    <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 25 }}>
                        1
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.number} onPress={() => handleInput(2)}>
                    <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 25 }}>
                        2
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.number} onPress={() => handleInput(3)}>
                    <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 25 }}>
                        3
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.number} onPress={() => handleInput(4)}>
                    <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 25 }}>
                        4
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.number} onPress={() => handleInput(5)}>
                    <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 25 }}>
                        5
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.number} onPress={() => handleInput(6)}>
                    <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 25 }}>
                        6
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.number} onPress={() => handleInput(7)}>
                    <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 25 }}>
                        7
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.number} onPress={() => handleInput(8)}>
                    <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 25 }}>
                        8
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.number} onPress={() => handleInput(9)}>
                    <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 25 }}>
                        9
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.number, borderWidth: 0 }} onPress={() => bioAuth()}>
                    <Icon name="fingerprint" size={55} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.number} onPress={() => handleInput(0)}>
                    <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 25 }}>
                        0
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.number, borderWidth: 0 }} onPress={() => handleBackspace()}>
                    <Icon name="backspace-outline" size={35} />
                </TouchableOpacity>

            </View>
            <Text style={{ fontFamily: 'Prompt-Regular', fontSize: 16, bottom: 70, position: 'absolute' }}>
                ลืมรหัส PIN ?
            </Text>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dot: {
        marginHorizontal: 8,
        width: 15,
        height: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#aeaeae'
    },
    fillDot: {
        marginHorizontal: 8,
        width: 15,
        height: 15,
        borderRadius: 15,
        backgroundColor: "#aeaeae"
    },
    number: {
        width: 80,
        height: 80,
        borderRadius: 80,
        borderWidth: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },

    input: {
        fontFamily: 'Prompt-Regular',
        width: 40,
        height: 'auto',
        borderBottomWidth: 1,
        borderColor: '#c9c9c9',
        textAlign: 'center',
        fontSize: 25,
        marginRight: 20,
    },
});

export default Signin