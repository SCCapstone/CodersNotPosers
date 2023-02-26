import React from "react";
import {
    View,
    Text,
    Image, 
    StyleSheet
} from 'react-native';
import { Header } from "react-navigation-stack";
import {SwipeListView} from 'react-native-swipe-list-view';
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";
import { Colors } from "react-native/Libraries/NewAppScreen";

const MyCart = ({navigation}) => {
    const [myCartList, setMyCartList] = React.useState(data.myCart)

    //handler

    function updateQuantityHandler(newQty, id) {
        const newMyCartList = myCartList.map(cl => (cl.id === id ? {...cl, qty: newQty } : cl 
        ))

        setMyCartList(newMyCartList)
    }

    //render

    function renderHeader() {
        return (
            <Header
                title="My Cart"
                containerStyle = {{
                    height: 50,
                    marginTop: 40
                }}
                leftComponent = {
                <IconButton
                    icon = { 
                        <TouchableOpacity onPress={()=>navigation.pop()}>
                        <Image source={leftarrow} 
                        style={{ width: 50, 
                        height: 50,
                        }} />
                        </TouchableOpacity> 
                    }
                    containerStyle = {{
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1
                    }}
                    iconStyle = {{
                        width: 20,
                        height: 20
                    }}
                    onPress={() => navigation.goBack()}
                    />
                }
            />
        )
    }

    function renderCartList() {
        return (
            <SwipeListView
                data={myCartList}
                keyExtractor={item=> `${item.id}`}
                contentContainerStyle = {{
                    //marginTop: ,
                    //paddingHorizontal: ,
                    //paddingBottom: 
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data, rowMap) => {
                    <View
                        style = {{
                            height:100,
                            backgroundColor:"#884E7D",
                            ...styles.cartItemContainer

                        }}
                    >
                        //Food Info
                        <View
                            style = {{ flex:1 }}
                        >
                            <Text>{data.item.name}</Text>
                            <Text>${data.item.price}</Text>
                        </View>

                        //quantity
                        <StepperInput
                            containerStyle = {{
                                height: 50,
                                width: 125,
                                backgroundColor: Colors.white
                            }}
                            value={data.items.qty}
                            onAdd={() => updateQuantityHandler(data.item.qty+1, data.item.id)}
                            onMinus = {() => updateQuantityHandler(data.item.qty-1, data.item.id)}
                        ></StepperInput>

                    </View>
                }}
                renderHiddenItem={(data, rowMap) => (
                    <IconButton 
                        containerStyle = {{
                            flex: 1,
                            justifyContent: 'flex-end',
                            backgroundColor: "#884E7D",
                            ...styles.cartItemContainer
                        }}
                        title = {"Remove"}
                        iconStyle = {{
                            marginRight:10
                        }}
                        onPress = {() => removeMyCartHandler(data.item.id)}
                    />

                )}
            />
        )
    }

    return (
        <View
            style = {{
                flex: 1, 
                justifyContent: 'center',
                backgroundColor:'#B6B7E5'
            }}
        >
            {renderHeader()}
            {renderCartList()}
        </View>
    )
}

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default MyCart;