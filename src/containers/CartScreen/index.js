import {} from 'react';
import {View, Text, FlatList, Button, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {cartActions} from '../../features/cart/cartSlice';

const CartScreen = props => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={cartItems}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                height: 60,
                marginHorizontal: 10,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <Text style={{ backgroundColor: "teal"}}>{item.item.name}</Text>
                <Text style={{ backgroundColor: "teal"}}>{item.item.details}</Text>
              </View>
              <Text style={{width: 80, backgroundColor: "teal"}}>Quantity: {item.quantity}</Text>
              <Text style={{width: 50, backgroundColor: "teal"}}>{item.item.price}</Text>
              <TouchableOpacity style={{
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }} onPress={() => {
    console.log('remove item');
    dispatch(cartActions.addToCart(item.item));
  }}>
        <Text style={{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }}>  +  </Text>
      </TouchableOpacity>
              <TouchableOpacity style={{
                marginLeft: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }} onPress={() => {
    console.log('remove item');
    dispatch(cartActions.removeFromCart(item.item));
  }}>
        <Text style={{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }}>  -  </Text>
      </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity style={{
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  }} onPress={() => {
    dispatch(cartActions.clearCart());
  }}>
        <Text style={{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }}>Reset cart</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default CartScreen;
