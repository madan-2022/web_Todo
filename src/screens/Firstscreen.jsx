import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ImageBackground } from 'react-native'
import { Box,Text , Image , Button , Flex , FlatList , Checkbox} from 'native-base'
import axios from 'axios'
import { data } from '../config/data/data'


const Firstscreen = ({navigation}) => {

    const [TaskList , setTaskList] = useState(data[0])


    // useEffect(()=>{
    //    const getData = async()=>{
    //     console.log("hvbnn")
    //     try{
    //         const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    //         console.log("jhjbvvbj")
    //         console.log(response)
    //         setTaskList(response.data)


    //     }
    //     catch(error){
    //         console.error(error+"hjhjg")
    //     }
    //    finally {
    //     console.log("ended")
      
    //   }
        
    //    }

    //    getData()
    // },[])

   

    const renderItem =({item}) =>(
      <Box width={'90%'}  marginX={'auto'} style={{elevation:10}} bg={'#FFFFFF'} marginTop={'5'} padding={'5'}   borderBottomColor="gray.200" borderRadius={'sm'}>
              <Text fontSize={'md'}>id : {item.id}</Text>
              <Text fontSize={'md'}>user id : {item.userId}</Text>
              <Text color={'black'} fontSize={'lg'} fontWeight={'600'}>{item.title}</Text>
              <Flex width={'40%'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} marginTop={'1.5'}>
              <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />

              <Text fontSize={'md'} fontWeight={'500'}color={'blue'}>Completed</Text>
              </Flex>
<Flex flexDirection={'row'} marginTop={'3'} justifyContent={'space-between'}><Button onPress={()=>{deleteTask(item.id)}}>Delete</Button>
<Button onPress={() => navigation.navigate('UpdateScreen', { task: item, updateTask })}>Update</Button>
</Flex>
              
              
            </Box>

    )

    const updateTask = (updatedTask) => {
      setTaskList(TaskList.map(task => task.id === updatedTask.id ? updatedTask : task));
    };
    
    const addTask = () => navigation.navigate('add', { addTaskToList });

    const deleteTask = (taskId) => {
      setTaskList(TaskList.filter(task => task.id !== taskId));
    };


    const addTaskToList = (task) => {
      setTaskList([task, ...TaskList]);
      console.log("task added sucess fully")
    };



  return (
    <ImageBackground width={'100%'} height={'100%'} source={require('../assets/bg1.png')}>

<Box width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} position={'relative'} >

<Box flex={1} justifyContent="center" alignItems="center">
        <FlatList
          data={TaskList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </Box>
   


</Box>

<Box position={'absolute'} bottom={'10'} right={'5'} backgroundColor={'blue.900'} style={{elevation:10}} padding={'5'} borderRadius={'md'}>
  <Text color={'white'} fontSize={'lg'} onPress={addTask}> Add new task</Text>
</Box>
    </ImageBackground>
  )
}

export default Firstscreen