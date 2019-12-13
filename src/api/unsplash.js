import axios from 'axios';

export default axios.create({
    
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f6950b7d8af5e19efc98334bc79e4fc5ecacf23f1bacf288e0057cf58d2ca54c'
    }
})