export const getTodaysDate = () =>{
    var today = new Date();
    var year = today.getFullYear();
    var mes = today.getMonth() + 1;
    var dia = today.getDate();
    var date = dia + "-" + mes + "-" + year;
    var time = new Date().toLocaleTimeString();
    return {date,time}
}
export default {
    getTodaysDate
}