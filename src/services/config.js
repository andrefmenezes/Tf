import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:3335',
});
//  var hoje = new Date();
// var ontem = new Date(hoje.getTime());
// ontem.setDate(hoje.getDate() - 1);
// var dd = ontem.getDate();
// var mm = ontem.getMonth()+1; 
// var yyyy = ontem.getFullYear();
// if(dd<10) 
// {
// dd='0'+dd;
// }

// if(mm<10) 
// {
// mm='0'+mm;
// } 
// var data_ontem = yyyy+''+mm+''+dd;

// export const bov = axios.create({
//     baseURL: `https://bovespa.nihey.org/api/quote/${papel}/${data_ontem}`,
// });