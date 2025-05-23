import axios from "@/utilities/axios"
import {useToast} from "vue-toastification";

const toast = useToast();

export default {
  state: {
    categories:[],
  },
  getters: {
  },
  mutations: {
    setCategories(state, categories){
        state.categories = categories
    }
  },
  actions: {
    getCategoryById(context, id){
        context.commit("setLoading" , true)
        return axios.get(`/api/category/${id}`)
        .finally(() => {
            context.commit("setLoading" , false)
        })
    },
    getCategories(context){
        context.commit("setLoading" , true)
        return axios.get(`/api/category`).then(res => {
            context.commit("setCategories", res.data)
        }).catch(err=>{
            toast.error("مشکلی رخ داده")
        })
        .finally(() => {
            context.commit("setLoading" , false)
        })
    },
    addCategories(context, category){
        context.commit("setLoading" , true)
        return axios.post(`/api/category` , category)
        .finally(() => {
            context.commit("setLoading" , false)
        })
    },
    editCategories(context , category){
        context.commit("setLoading" , true)
        return axios.put(`/api/category` , category)
        .finally(() => {
            context.commit("setLoading" , false)
        })
    },
    deleteCategories(context , id){
        context.commit("setLoading" , true)
        return axios.delete(`/api/category/${id}`)
        .finally(() => {
            context.commit("setLoading" , false)
        })
    },
  },
}