
<script setup>

import { ref, onMounted } from 'vue';
import axios from 'axios'



const list = ref([]);
const text = ref("");
console.log(text)



const postData = async () => {

    axios.post("https://642bec39208dfe254722fdf8.mockapi.io/product", {
        name: text.value
    }).then(() => { onMounted(fetchdata()) })
}







const addData = async () => {
    if (text.value === "") {
        alert("Please Enter Name")
    }
    else {

        alert("Added")
        postData()

        text.value = "";
    }


}


const fetchdata = async () => {

    const res = await axios.get("https://642bec39208dfe254722fdf8.mockapi.io/product");

    const mydata = await res.data;

    list.value = mydata
    // console.log(mydata)
    // console.log(list)




}


onMounted(() => {
    fetchdata()
})




const deletedata = (id) => {

    alert("Are you Sure")
    axios.delete(`https://642bec39208dfe254722fdf8.mockapi.io/product/${id}`).then(() => {
        onMounted(fetchdata());
    })


}



</script>




<template>
    <main class="flex flex-col items-center w-screen  bg-slate-200   py-[4rem] min-h-fit">
        <h1 class="text-center  text-3xl font-bold uppercase">Crud App</h1>

        <from class="w-[600px] h-[300px] gap-[2rem] flex items-center flex-col pt-[5rem]" @submit.prevent="addData">

            <input type="text" id="name" required placeholder=" Enter name" v-model="text"
                class="w-[400px] p-[15px] border-none outline-none shadow-xl" />
            <button class="w-[150px] bg-black p-[12px]  text-white" type="submit" @click="addData">Post Data</button>

        </from>

        <h2 class="text-xl tracking-wider" v-show="list.length === 0"> No List Here😞</h2>







        <!-- show data section -->





        <div v-for="singlelist in list" :key="singlelist.id"
            class="flex min-h-fit   flex-col gap-[10px]  mt-[2rem]  p-[15px]">
            <div class="w-[500px] p-[15px] bg-white items-center flex   ">

                {{ singlelist.name }}


            </div>
            <div class="flex  justify-between ">



                <RouterLink :to="'edit/' + singlelist.id">




                    <button class="shadow-xl bg-black w-[100px] p-[8px] text-white">Update</button>
                </RouterLink>

                <button class="shadow-xl bg-black w-[100px] p-[8px] text-white"
                    @click="deletedata(singlelist.id)">Delete</button>

            </div>


        </div>

    

    </main>
</template> 
