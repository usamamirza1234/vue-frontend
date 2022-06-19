import axios from 'axios';
const baseUrl = "http://localhost:3000";
const apiUrl = "/api/v1"
const url = baseUrl+apiUrl
const token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DiPWrOKsx3sPeVClrm_j07XNdSYHgBa3Qctosdxax3w"
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

const state = {
    blogs: Array,
    user: Array
};

const getters = {
    allBlogs: (state) => state.blogs,
    signedInUser: (state) => state.user,
};

const actions = {
    async fetchBlog ({commit}){
        const response = await axios.get(url+"/posts")
        commit("setBlogs", response.data)
    },
    async addBlog ({commit}, heading) {
        const response = await axios.post(url+"/blogs",
            {
                blog: {
                       heading
                }
            })
        commit("newBlog", response.data)
    },
    async loginUser({commit}, data){
        let email =data.email
        let password =data.password
        const response = await axios.post(url+"/sign_in",
            {
                user: {
                    email,
                    password
                }
            })
        commit("loginUser", response.data)
        console.log(response.data)
    }
};

const mutations ={
    setBlogs: (state,blogs) => (state.blogs = blogs),
    newBlog: (state, blog) => (state.blogs.unshift(blog)),
    signedInUser: (state, user) => (state.user =  user)
};

export default {
    state,
    getters,
    actions,
    mutations
}