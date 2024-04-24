import Swal from "sweetalert2";
import { useCallback } from 'react';

const useSweetAlerts = () => {
    const showAlert = useCallback((options) => {
      return Swal.fire(options);
    }, []);
  
    const showSuccessAlert = useCallback((title, confirmButtonText = "Aceptar", onConfirm) => {
      return showAlert({
        icon: "success",
        title: title,
        showConfirmButton: true,
        confirmButtonText: confirmButtonText,
        customClass: {
          title: 'font-montserratBold, text-2xl',
          confirmButton: 'bg-primaryLila font-montserratBold text-white rounded-lg text-lg shadow-4xl px-6 py-2',
        },
        buttonsStyling: false,
        didClose: () => {
          if (onConfirm) onConfirm();
        }
      });
    }, [showAlert]);
  
    const showConfirmationAlert = (title, confirmButtonText = "Aceptar", cancelButtonText = "Cancelar") => {
      return showAlert({
        title: title,
        icon: "warning",
        showConfirmButton: true,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        showCancelButton: true,
        customClass: {
          title: 'font-montserratBold, text-2xl',
          confirmButton: 'bg-primaryLila font-montserratBold text-white rounded-lg text-lg shadow-4xl m-2 px-6 py-2',
          cancelButton: 'bg-redBin font-montserratBold text-white rounded-lg text-lg shadow-4xl m-2 px-6 py-2',
        },
        buttonsStyling: false,
      }).then((result) => {
        return result.isConfirmed;
      });
    };
  
    const showLoadingAlert = useCallback((title, text, timer = 3000) => {
      return showAlert({
        title: title,
        html: text,
        timer: timer,
        timerProgressBar: true,
        showConfirmButton: false,
        customClass: {
          title: 'font-montserratBold, text-2xl',
          text: 'font-montserratBold text-lg',
        },
        didOpen: () => {
          Swal.showLoading();
        },
      });
    }, [showAlert]);
  
    const showErrorAlert = useCallback((title, confirmButtonText = "Aceptar", onConfirm) => {
      return showAlert({
        icon: "error",
        title: title,
        showConfirmButton: true,
        confirmButtonText: confirmButtonText,
        customClass: {
          title: 'font-montserratBold, text-2xl',
          confirmButton: 'bg-primaryLila font-montserratBold text-white rounded-lg text-lg shadow-4xl px-6 py-2',
        },
        buttonsStyling: false,
        didClose: () => {
          if (onConfirm) onConfirm();
        }
      });
    }, [showAlert]);
      
    return {
      showAlert,
      showSuccessAlert,
      showConfirmationAlert,
      showLoadingAlert,
      showErrorAlert
    };
  };
  
  export default useSweetAlerts;