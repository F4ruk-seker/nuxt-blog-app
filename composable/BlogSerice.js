import axios from "axios";


class BlogService{
    async getTags(context){
        try {
            const response =  await axios.get('content/type/blog', context)
            if (response.status === 201){
                return response.data
            } else {
                Promise.reject('Data fetch error from getTags')
            }
        } catch (e) {
            Promise.reject(e)
        }
    }

}

export default new BlogService()