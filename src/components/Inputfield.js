import React from 'react';
 import {View, 
        Text,
        TouchableOpacity,
        TextInput}
        from 'react-native';

 export default function InputField({
   label,
   icon,
   inputType,
   keyboardType,
   fieldButtonLabel,
   fieldButtonFunction,
 }) {
   return (
     <View
       style={{
         flexDirection: 'row',
         paddingBottom: 8,
         marginBottom: 25,
         borderBottomColor: 'black',
         borderBottomWidth: 1,
       }}>
        
       {inputType == 'password' ? (
         <TextInput
           placeholder={label}
           secureTextEntry={true}
           keyboardType={keyboardType}
           style={{flex: 1, paddingVertical: 0}}
         />
       ) : (
         <TextInput
           placeholder={label}
           keyboardType={keyboardType}
           style={{flex: 1, paddingVertical: 0}}
         />
       )}
       <TouchableOpacity onPress={fieldButtonFunction}>
         <Text style={{color: '#AD40AF', fontWeight: '700'}}>{fieldButtonLabel}</Text>
       </TouchableOpacity>
     </View>
   );
 }