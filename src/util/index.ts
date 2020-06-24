
/**
This function takes the URL from an Input element and gets the data ready to upload to Google Cloud Services
@param file Data as a File format from an Input element
@return Base64 String 
*/
export const URLtoBASE64Raw = (file: File) => {
	return new Promise((resolve, reject) => {
	  let reader = new FileReader();
  
		reader.onload = () => {
			const imageBase = String(reader.result).replace('data:image/png;base64,' , '');
			resolve(imageBase);
	  };
  
	  reader.onerror = reject;
  
	  reader.readAsDataURL(file);
	})
}
  
export const OpenCatalog = function () {
	window.open('https://firebasestorage.googleapis.com/v0/b/arva-3193d.appspot.com/o/mainCatalog%2Fcatalog.pdf?alt=media&token=3c242b64-39ed-4495-8a0e-d58bd9a7e77e');
}