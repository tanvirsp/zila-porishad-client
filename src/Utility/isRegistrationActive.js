import moment from 'moment';

const isRegistrationActive = (isoDate) =>{
  console.log(isoDate);
  
  if(isoDate === undefined ){
      return false
    } else {
      const currentDate = moment().format().split("T")[0];
      const startDate =  isoDate.split("T")[0];
      return currentDate >= startDate ;
    }
  }




export default  isRegistrationActive