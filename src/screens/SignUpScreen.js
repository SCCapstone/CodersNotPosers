import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const SignUpScreen = (props) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    const [
      isRegistraionSuccess,
      setIsRegistraionSuccess
    ] = useState(false);

    const emailInputRef = createRef();
    const passwordInputRef = createRef();
    const handleSubmitButton = () => {
        setErrortext('');
        if (!userName) {
          alert('Please fill Name');
          return;
        }
        if (!userEmail) {
          alert('Please fill Email');
          return;
        }
        if (!userPassword) {
          alert('Please fill Password');
          return;
        }
