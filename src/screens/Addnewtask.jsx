import { View } from 'react-native'
import React, { useState } from 'react'
import { Box , Input , Stack , Text , Select , CheckIcon , Button} from 'native-base'

const Addnewtask = ({navigation , route}) => {

    const [title , setTitle] = useState("")
    const [userId , setUserId] = useState("")
    const [completed , setCompleted] = useState(null)

    const {addTaskToList} = route.params

    console.log(title)
    console.log(userId)
    console.log(completed)

    const addTask = () => {
        const newTask = { userId: 1, id: Date.now(), title, completed: false };
        addTaskToList(newTask);
        navigation.goBack();
      };

  return (
    <Box width>
<Box height={'30%'} marginTop={'5'}>

<Text color={'#000000'} fontSize={'2xl'}  textAlign={'center'}>Complete your profile</Text>
<Stack space={4} width="80%" maxW="370px" mx="auto">




<Input variant="underlined" placeholder="Enter title" width={'90%'} marginX={'auto'} marginTop={'10'} fontSize={'lg'} placeholderTextColor={'black'} value={title} onChangeText={setTitle}/>


{/* <Select selectedValue={completed} fontSize={'lg'} placeholderTextColor={'black'} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setCompleted(itemValue)}>
          <Select.Item label="completed" value='True' />
          <Select.Item label="Not completed" value="False" />
         
        </Select> */}


<Button onPress={addTask}>add task</Button>



</Stack>




</Box>    </Box>
  )
}

export default Addnewtask