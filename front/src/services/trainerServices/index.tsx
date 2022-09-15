import api from '../api';

interface loginData{
    email: string;
    password: string
}

export default{
    async login(data: loginData){
        try{
            const response = api.post('/login', data);
            return response;
        }catch(e){
            console.log(e);
        }
    }
}