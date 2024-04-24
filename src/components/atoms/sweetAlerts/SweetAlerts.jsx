import Swal from "sweetalert2";
import { useCallback } from 'react';

const useSweetAlerts = () => {
    const showAlert = useCallback((options) => {
      return Swal.fire(options);
    }, []);
  
    const showSuccessAlert = useCallback((title, message, timer = 3000) => {
      return showAlert({
        icon: "success",
        title: title,
        text: message,
        timer: timer,
        showConfirmButton: false,
      });
    }, [showAlert]);

  
    const showLoadingAlert = useCallback((title, text, timer = 3000) => {
      return showAlert({
        title: title,
        html: text,
        timer: timer,
        timerProgressBar: true,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }, [showAlert]);
  
    const showErrorAlert = useCallback((title, text) => {
      return showAlert({
        title: title,
        text: text,
        icon: "error"
      });
    }, [showAlert]);
      
    return {
      showAlert,
      showSuccessAlert,
      showLoadingAlert,
      showErrorAlert
    };
  };
  
  export default useSweetAlerts;