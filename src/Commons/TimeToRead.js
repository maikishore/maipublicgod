export default function TimeToReadContent(ev) {
    try {
     if(typeof ev==="string"){
       const wordsPerMinute = 200; // Average case.
       let result;
     
       let textLength = ev.split(" ").length; // Split by words
       if (textLength > 0) {
         let value = Math.ceil(textLength / wordsPerMinute);
         result = `~${value} min`;
         return result;
       } else {
         return `$~${1} min`;
       }
      } else {
       return `${1} min`
     }
     } 
     catch {
       return `${0} min`
     }
     
   }
   