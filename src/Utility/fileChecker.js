
export const IsFileEmptyScholarship = (obj) =>{
  
  
  if(obj.profileImg === undefined || obj.profileImg === "") return false
  if(obj.signature === undefined || obj.signature === "") return false
  
  return true
  

  
}



export const IsFileEmptyForCourse = (obj) =>{
      for (let key in obj) {
        if (obj[key] === "" || obj[key] === null || obj[key] === undefined) {
          return false;
        }
      }
      return true;
}


