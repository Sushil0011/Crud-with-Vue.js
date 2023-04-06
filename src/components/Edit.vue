
<script setup>
import { ref,onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import router from '../router';

const s_data=ref({})

const editedName=ref("")



   

const props = defineProps( {
      id: {
        type: Number,
        required: true,
      }

    })

    // onMounted( () => {
        
    // } )




const fetchSingleData= async()=>{

const res = await axios.get(`https://642bec39208dfe254722fdf8.mockapi.io/product/${props.id}`);

const mydata = await res.data;
console.log(mydata)

s_data.value=mydata
console.log(s_data.value.name)

editedName.value=s_data.value.name
// console.log(mydata)
// console.log(list)




}


onMounted(() => {
    fetchSingleData()
    console.log(props.id)
})

const updateData=()=>{

    postUpdatedData();
}



const postUpdatedData= async()=>{
   


    axios.put(`https://642bec39208dfe254722fdf8.mockapi.io/product/${props.id}`,{
        name:editedName.value
    }).then(()=>router.push('/'))
}



</script>




<template>

    <main  class="flex flex-col items-center  pt-[15rem] w-screen  bg-slate-200   py-[4rem] h-screen">
 <h1  class="text-center  text-3xl font-bold uppercase">Update Name</h1>
    
     <from @submit.prevent="updateData" class="w-[600px] h-[300px] gap-[2rem] flex items-center flex-col pt-[5rem]">
 
 <input type="text" placeholder=" Enter name"  v-model="editedName"  class="w-[400px] p-[15px] border-none outline-none shadow-xl"/>


 <button class="w-[150px] bg-black p-[12px]  text-white" type="submit"    @click="updateData">Update</button>

<RouterLink  to="/">
 <button class="w-[150px] bg-black p-[12px]  text-white" type="submit">Back</button>
 
</RouterLink>
     </from>
 

 
         </main>
 </template>